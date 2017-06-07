namespace WebAPIwithAngular2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Mark
    {
        public int MarkID { get; set; }

        public int SubjectId { get; set; }

        public int StudentId { get; set; }

        public int MarkofSubject { get; set; }

        public virtual MASTER MASTER { get; set; }

        public virtual StudentInformation StudentInformation { get; set; }
    }
}
