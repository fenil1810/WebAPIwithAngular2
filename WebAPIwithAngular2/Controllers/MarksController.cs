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
    public class MarksController : ApiController
    {

        private Model1 db = new Model1();

        // GET: api/Marks
        [Route("Marks")]
        public IQueryable<Combined> GetMarks(int id)
        {

            db.Configuration.ProxyCreationEnabled = false;
            var marks = db.Marks.Where(x => x.StudentId == id).Select(y =>
            new Combined
            {
                StudentId = y.StudentId,
                StudentInformation=y.StudentInformation,
                SubjectId=y.SubjectId,
                SubjectName=y.MASTER.SubjectName,
                MarkID=y.MarkID,
                MarkofSubject=y.MarkofSubject

            }
            
            );
            return marks;
        }

        // GET: api/Marks/5
         [ResponseType(typeof(Mark))]
        public IHttpActionResult GetMark(int id)
        {

            //int id = studentInformation.StudentId;
               Mark mark = db.Marks.Find(id);
               if (mark == null)
               {
                   return NotFound();
               }

               return Ok(mark);
           // return db.Marks.Where(x => x.StudentId == id);
        }

        // PUT: api/Marks/5
        [Route("UpdateMarks")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMark(Mark mark)
        {
            int id = mark.MarkID;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != mark.MarkID)
            {
                return BadRequest();
            }

            db.Entry(mark).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MarkExists(id))
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

        // POST: api/Marks
        [Route("CreateMarks")]
        [ResponseType(typeof(Mark))]
        public IHttpActionResult PostMark(Mark mark)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Marks.Add(mark);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // DELETE: api/Marks/5
        [Route("DeleteMarks")]
        [ResponseType(typeof(Mark))]
        public IHttpActionResult DeleteMark(int id)
        {
            Mark mark = db.Marks.Find(id);
            if (mark == null)
            {
                return NotFound();
            }

            db.Marks.Remove(mark);
            db.SaveChanges();

            return Ok(mark);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MarkExists(int id)
        {
            return db.Marks.Count(e => e.MarkID == id) > 0;
        }
    }
}