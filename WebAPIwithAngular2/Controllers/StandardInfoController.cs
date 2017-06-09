using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebAPIwithAngular2.Controllers
{
    public class StandardInfoController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<int> Get()
        {
            Model1 db = new Model1();
            List<int> standard = new List<int>();
            standard = db.StudentInformations.Select(x=>x.Standard).Distinct().ToList();
            return standard;
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}