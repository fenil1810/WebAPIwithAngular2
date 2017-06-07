using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPIwithAngular2.Models
{
    public class Combined
    {
        public int MarkID { get; set; }

        public int SubjectId { get; set; }

        public string SubjectName { get; set; }

        public int StudentId { get; set; }

        public int MarkofSubject { get; set; }

        public StudentInformation StudentInformation { get; set; }

       
    }
}