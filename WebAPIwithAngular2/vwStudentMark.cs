namespace WebAPIwithAngular2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class vwStudentMark
    {
        [Key]
        [Column(Order = 0)]
        [StringLength(10)]
        public string SubjectName { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MarkofSubject { get; set; }
    }
}
