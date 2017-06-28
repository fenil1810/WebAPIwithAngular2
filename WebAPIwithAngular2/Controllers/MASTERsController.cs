using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPIwithAngular2;
using WebAPIwithAngular2.Models;

namespace WebAPIwithAngular2.Controllers
{
    [AllowAnonymous]

    public class MASTERsController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/MASTERs
        [Route("Subject")]
        public IQueryable<Subjects> GetMASTERs()
        {
            var subjects=db.MASTERs.Select(x =>
            new Subjects
            {
                SubjectId = x.SubjectId,
                SubjectName=x.SubjectName
            }
            
            
            );
            return subjects; 
        }

        // GET: api/MASTERs/5
        [ResponseType(typeof(MASTER))]
        public IHttpActionResult GetMASTER(int id)
        {
            MASTER mASTER = db.MASTERs.Find(id);
            if (mASTER == null)
            {
                return NotFound();
            }

            return Ok(mASTER);
        }

        // PUT: api/MASTERs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMASTER(int id, MASTER mASTER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != mASTER.SubjectId)
            {
                return BadRequest();
            }

            db.Entry(mASTER).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MASTERExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/MASTERs
        [ResponseType(typeof(MASTER))]
        public IHttpActionResult PostMASTER(MASTER mASTER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.MASTERs.Add(mASTER);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = mASTER.SubjectId }, mASTER);
        }

        // DELETE: api/MASTERs/5
        [ResponseType(typeof(MASTER))]
        public IHttpActionResult DeleteMASTER(int id)
        {
            MASTER mASTER = db.MASTERs.Find(id);
            if (mASTER == null)
            {
                return NotFound();
            }

            db.MASTERs.Remove(mASTER);
            db.SaveChanges();

            return Ok(mASTER);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MASTERExists(int id)
        {
            return db.MASTERs.Count(e => e.SubjectId == id) > 0;
        }
    }
}