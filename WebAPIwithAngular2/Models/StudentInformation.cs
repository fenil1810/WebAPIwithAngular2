namespace WebAPIwithAngular2
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("StudentInformation")]
    public partial class StudentInformation
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public StudentInformation()
        {
            Marks = new HashSet<Mark>();
        }

        [Key]
        public int StudentId { get; set; }

        [Required]
        [StringLength(20)]
        public string StudentName { get; set; }

        [Required]
        [StringLength(1)]
        public string Gender { get; set; }

        public int Standard { get; set; }

        [Required]
        [StringLength(1)]
        public string Section { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Mark> Marks { get; set; }
    }
}
