using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.UI.WebControls;
using System.Web.Http;
using System.Text;
using System.Web.Http.Description;
using WebAPIwithAngular2;
using static WebAPIwithAngular2.jQueryGoogleChart;

namespace WebAPIwithAngular2.Controllers
{
    public class APIController : ApiController
    {

        // GET: api/API/
        [Route("api/GetChartData")]
        public List<stuDetails> GetChartData()
        {
            Model1 db = new Model1();
            var query = from s in db.StudentInformations
                        group s by s.Section into g
                        select new { Count = g.Count(), Section = g.Key };

            List<stuDetails> dataList = new List<stuDetails>();
            foreach (var v in query)
            {
                stuDetails studetails = new stuDetails();
                studetails.Section = v.Section.ToString();
                studetails.Total = v.Count;
                dataList.Add(studetails);
                Console.WriteLine("Value = {0}, Count = {1}", v.Section, v.Count);

            }
            return dataList;
        }

        [Route("api/StandardData")]
        public List<StandardDetails> GetStandardData()
        {
            Model1 db = new Model1();
            var query = from s in db.StudentInformations
                        group s by s.Standard into g
                        select new { Count = g.Count(), Standard = g.Key };

            List<StandardDetails> dataList2 = new List<StandardDetails>();
            foreach (var v in query)
            {
                StandardDetails standarddetails = new StandardDetails();
                standarddetails.Standard = v.Standard.ToString();
                standarddetails.Total = v.Count;
                dataList2.Add(standarddetails);
                Console.WriteLine("Value = {0}, Count = {1}", v.Standard, v.Count);

            }
            return dataList2;
        }
        [Route("api/MarksData")]
        public List<MarksDetails> GetMarksData()
        {
            Model1 db = new Model1();
            var query = from s in db.Marks.Where(x=>x.StudentId==1)
                        select new { SubjectName = s.MASTER.SubjectName, MarkofSubject = s.MarkofSubject };
            List<MarksDetails> dataList3 = new List<MarksDetails>();
            foreach(var v in query)
            {
                MarksDetails marksDetails = new MarksDetails();
                marksDetails.SubjectName = v.SubjectName.ToString();
                marksDetails.MarkofSubject = v.MarkofSubject;
                dataList3.Add(marksDetails);
            }
            return dataList3;
        }
        public class stuDetails
        {
            public string Section { get; set; }
            public int Total { get; set; }
        }
        public class StandardDetails
        {
            public string Standard { get; set; }
            public int Total { get; set; }
        }
        public class MarksDetails{
            public string SubjectName { get; set; }
            public int MarkofSubject { get; set; }
        }
    }
}