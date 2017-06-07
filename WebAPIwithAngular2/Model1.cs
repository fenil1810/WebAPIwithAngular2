namespace WebAPIwithAngular2
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Model1 : DbContext
    {
        public Model1()
            : base("name=Model1")
        {
        }

        public virtual DbSet<Mark> Marks { get; set; }
        public virtual DbSet<MASTER> MASTERs { get; set; }
        public virtual DbSet<StudentInformation> StudentInformations { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MASTER>()
                .Property(e => e.SubjectName)
                .IsUnicode(false);

            modelBuilder.Entity<MASTER>()
                .HasMany(e => e.Marks)
                .WithRequired(e => e.MASTER)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<StudentInformation>()
                .Property(e => e.StudentName)
                .IsUnicode(false);

            modelBuilder.Entity<StudentInformation>()
                .Property(e => e.Gender)
                .IsUnicode(false);

            modelBuilder.Entity<StudentInformation>()
                .Property(e => e.Section)
                .IsUnicode(false);

            modelBuilder.Entity<StudentInformation>()
                .HasMany(e => e.Marks)
                .WithRequired(e => e.StudentInformation)
                .WillCascadeOnDelete(false);
        }
    }
}
