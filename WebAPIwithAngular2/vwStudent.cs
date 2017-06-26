namespace WebAPIwithAngular2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class vwStudent
    {
        [Key]
        [Column(Order = 0)]
        public int StudentId { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(20)]
        public string StudentName { get; set; }

        [Key]
        [Column(Order = 2)]
        [StringLength(1)]
        public string Gender { get; set; }

        [Key]
        [Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Standard { get; set; }

        [Key]
        [Column(Order = 4)]
        [StringLength(1)]
        public string Section { get; set; }
    }
}
