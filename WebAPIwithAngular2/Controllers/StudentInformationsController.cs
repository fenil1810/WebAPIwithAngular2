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
    public class StudentInformationsController : ApiController
    {
        private Model1 db = new Model1();

        // GET: api/StudentInformations
        [Route("Student")]
        public IQueryable<StudentInformation> GetStudentInformations()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.StudentInformations;
        }
        [Route("StandardList")]
        public IQueryable<StandardInfo> Get()
        {
            Model1 db = new Model1();
            // List<int> standard2 = new List<int>();
            var standard = db.StudentInformations
                .Select(x => new StandardInfo
                {
                    Standard = x.Standard
                }).Distinct();
              
            return standard;
        }
        [Route("ListStudents")]
        public IQueryable<StudentInformation> GetListStudentInformations(int id)
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.StudentInformations.Where(s=>s.Standard==id);
        }

        // GET: api/StudentInformations/5

        [ResponseType(typeof(StudentInformation))]
        public IHttpActionResult GetStudentInformation(int id)
        {
            StudentInformation studentInformation = db.StudentInformations.Find(id);
            if (studentInformation == null)
            {
                return NotFound();
            }
            return Ok(studentInformation);
        }

        // PUT: api/StudentInformations/5
        [Route("Update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStudentInformation(StudentInformation studentInformation)
        {
            int id = studentInformation.StudentId;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != studentInformation.StudentId)
            {
                return BadRequest();
            }

            db.Entry(studentInformation).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentInformationExists(id))
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
        // POST: api/StudentInformations
        [Route("Create")]
        [ResponseType(typeof(StudentInformation))]
        public IHttpActionResult PostStudentInformation(StudentInformation studentInformation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.StudentInformations.Add(studentInformation);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);

        }

        // DELETE: api/StudentInformations/5
        [Route("Delete")]
        [ResponseType(typeof(StudentInformation))]
        public IHttpActionResult DeleteStudentInformation(int id)
        {
            StudentInformation studentInformation = db.StudentInformations.Find(id);
            if (studentInformation == null)
            {
                return NotFound();
            }

            db.StudentInformations.Remove(studentInformation);
            db.SaveChanges();

            return Ok(studentInformation);
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentInformationExists(int id)
        {
            return db.StudentInformations.Count(e => e.StudentId == id) > 0;
        }
    }
}