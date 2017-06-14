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
using System.Data.SqlClient;

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
                studetails.Section = "Section "+v.Section.ToString();
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
        public async System.Threading.Tasks.Task<List<MarksDetails>> GetMarksData(int id)
        {
            /* Model1 db = new Model1();
             var query = from s in db.Marks.Where(x=>x.StudentId==id)
                         select new { SubjectName = s.MASTER.SubjectName, MarkofSubject = s.MarkofSubject };
             */
            List<MarksDetails> query;
            using (var context = new Model1())
            {
                SqlParameter param1 = new SqlParameter("@StuId", id);
                query = await context.Database.SqlQuery<MarksDetails>("StudentMarks @StuId", param1).ToListAsync();
            }
            List<MarksDetails> dataList3 = new List<MarksDetails>();
            foreach (var v in query)
            {
                MarksDetails marksDetails = new MarksDetails();
                marksDetails.SubjectName = v.SubjectName.ToString();
                marksDetails.MarkofSubject = v.MarkofSubject;
                dataList3.Add(marksDetails);
            }
            return dataList3;
        }
        [Route("api/ClassResult")]
        public async System.Threading.Tasks.Task<List<ClassResultDetails>> GetClassResult(int id)
        {
            /*Model1 db = new Model1();
            var query1 = from s in db.Marks.Where(x => x.StudentInformation.Standard == id && x.MarkofSubject >= 40)
                         select new { StudentId = s.StudentId, MarkofSubject = s.MarkofSubject };
            int PassCount = query1.GroupBy(x => x.StudentId).Select(x =>x.FirstOrDefault()).Count();
            var query2 = from s in db.Marks.Where(x=>x.StudentInformation.Standard==id && x.MarkofSubject<40)
                        select new { StudentId=s.StudentId, MarkofSubject = s.MarkofSubject };
            int FailCount=query2.GroupBy(x=>x.StudentId).Select(x=>x.FirstOrDefault()).Count();
            */
            int FailCount,PassCount,TotalCount;
            using (var context = new Model1())
            {
                SqlParameter param1 = new SqlParameter("@std", id);
                FailCount = await context.Database.SqlQuery<int>("FailCount @std", param1).SingleAsync();
            }
            using (var context = new Model1())
            {
                SqlParameter param1 = new SqlParameter("@std", id);
                TotalCount = await context.Database.SqlQuery<int>("PassCount @std", param1).SingleAsync();
            }
            PassCount = TotalCount - FailCount;
            List<ClassResultDetails> dataList4 = new List<ClassResultDetails>();
            ClassResultDetails classResultDetails = new ClassResultDetails();
            classResultDetails.Result = "Pass";
            classResultDetails.Total = PassCount;
            dataList4.Add(classResultDetails);
            ClassResultDetails classResultDetails2 = new ClassResultDetails();
            classResultDetails2.Result = "Fail";
            classResultDetails2.Total = FailCount;
            dataList4.Add(classResultDetails2);

            return dataList4;
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
        public class ClassResultDetails
        {
            public string Result { get; set; }
            public int Total { get; set; }
        }
    }
}