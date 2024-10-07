import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ResumeForm.css';
import jsPDF from 'jspdf';

const ResumeForm = () => {
  // Initialize the form handling using useForm
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('template1');

  // Handle form submission
  const onSubmit = (data) => {
    setFormData(data);
  };

  // Handle download action (generate PDF from form data)
  const handleDownload = () => {
    if (!formData) {
      alert('Please fill out the form and preview it before downloading.');
      return;
    }

    const doc = new jsPDF();

    // Add text for personal details
    doc.text(`Full Name: ${formData.fullName}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);
    doc.text(`Contact Number: ${formData.contactNo}`, 10, 30);
    doc.text(`LinkedIn: ${formData.linkedin}`, 10, 40);

    // Add text for educational details
    doc.text('Education:', 10, 50);
    doc.text(`SSC - University: ${formData.SSC}`, 10, 60);
    doc.text(`Year: ${formData.SSCYear}`, 10, 70);
    doc.text(`Stream: ${formData.SSCStream}`, 10, 80);
    doc.text(`Score: ${formData.SSCScore}`, 10, 90);

    doc.text(`HSC - University: ${formData.HSC}`, 10, 100);
    doc.text(`Year: ${formData.HSCYear}`, 10, 110);
    doc.text(`Stream: ${formData.HSCStream}`, 10, 120);
    doc.text(`Score: ${formData.HSCScore}`, 10, 130);

    doc.text(`Diploma - University: ${formData.Diploma}`, 10, 140);
    doc.text(`Year: ${formData.DiplomaYear}`, 10, 150);
    doc.text(`Stream: ${formData.DiplomaStream}`, 10, 160);
    doc.text(`Score: ${formData.DiplomaScore}`, 10, 170);

    doc.text(`Graduation - University: ${formData.Graduation}`, 10, 180);
    doc.text(`Year: ${formData.GraduationYear}`, 10, 190);
    doc.text(`Stream: ${formData.GraduationStream}`, 10, 200);
    doc.text(`Score: ${formData.GraduationScore}`, 10, 210);

    // Add text for experience
    doc.text('Experience:', 10, 220);
    doc.text(`Company: ${formData.Experience1Company}`, 10, 230);
    doc.text(`Location: ${formData.Experience1Location}`, 10, 240);
    doc.text(`Role: ${formData.Experience1Role}`, 10, 250);
    doc.text(`Duration: ${formData.Experience1Duration}`, 10, 260);

    // Add text for skills
    doc.text('Skills:', 10, 270);
    doc.text(`Technical Skills: ${formData.technicalSkills}`, 10, 280);
    doc.text(`Soft Skills: ${formData.softSkills}`, 10, 290);

    // Save the PDF
    doc.save('resume.pdf');
  };

  return (
    <div className="resume-form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Your Resume</h2>

        {/* Personal Details Section */}
        <section>
          <h3>Personal Details</h3>
          <input {...register('fullName', { required: true })} placeholder="Full Name" />
          {errors.fullName && <span className="error">This field is required</span>}

          <input {...register('contactNo', { required: true })} placeholder="Contact Number" />
          {errors.contactNo && <span className="error">This field is required</span>}

          <input {...register('email', { required: true })} placeholder="Email" />
          {errors.email && <span className="error">This field is required</span>}

          <input {...register('linkedin', {required: true})} placeholder="LinkedIn Profile" />
        </section>

        {/* Educational Details Section */}
        <section>
          <h3>Educational Details</h3>
          <input {...register('SSC', { required: true })} placeholder="University (SSC)" />
          <input {...register('SSCYear', { required: true })} placeholder="Year (SSC)" />
          <input {...register('SSCStream', { required: true })} placeholder="Stream (SSC)" />
          <input {...register('SSCScore', { required: true })} placeholder="Score (SSC)" />

          {/* Changed to use `register` correctly for the HSC section */}
          <input {...register('HSC', { required: true })} placeholder="University (HSC)" />
          <input {...register('HSCYear', { required: true })} placeholder="Year (HSC)" />
          <input {...register('HSCStream', { required: true })} placeholder="Stream (HSC)" />
          <input {...register('HSCScore', { required: true })} placeholder="Score (HSC)" />

          {/* Added register for the diploma fields */}
          <input {...register('Diploma', { required: true })} placeholder="University (Diploma)" />
          <input {...register('DiplomaYear', { required: true })} placeholder="Year (Diploma)" />
          <input {...register('DiplomaStream', { required: true })} placeholder="Stream (Diploma)" />
          <input {...register('DiplomaScore', { required: true })} placeholder="Score (Diploma)" />

          {/* Graduation */}
          <input {...register('Graduation', { required: true })} placeholder="University (Graduation)" />
          <input {...register('GraduationYear', { required: true })} placeholder="Year (Graduation)" />
          <input {...register('GraduationStream', { required: true })} placeholder="Stream (Graduation)" />
          <input {...register('GraduationScore', { required: true })} placeholder="Score (Graduation)" />
        </section>

        {/* Experience Section */}
        <section>
          <h3>Experience Details</h3>
          <input {...register('Experience1Company', { required: true })} placeholder="Company (Experience 1)" />
          <input {...register('Experience1Location', { required: true })} placeholder="Location (Experience 1)" />
          <input {...register('Experience1Role', { required: true })} placeholder="Role (Experience 1)" />
          <input {...register('Experience1Duration', { required: true })} placeholder="Duration (Experience 1)" />
        </section>

        {/* Skills Section */}
        <section>
          <h3>Skills</h3>
          <input {...register('technicalSkills', { required: true })} placeholder="Technical Skills" />
          <input {...register('softSkills', { required: true })} placeholder="Soft Skills" />
        </section>

        {/* Template Selection */}
        <section>
          <h3>Select Resume Template</h3>
          <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)}>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            <option value="template3">Template 3</option>
          </select>
        </section>

        {/* Buttons */}
        <button id='container' type="submit">Preview</button>
        <button id='container' type="button" onClick={handleDownload}>Download</button>
      </form>

      {/* Preview Section */}
      {formData && (
        <div className="resume-preview">
          <h3>Resume Preview</h3>
          <div className={`resume-template ${selectedTemplate}`}>
            <h4>{formData.fullName}</h4>
            <p>Email: {formData.email}</p>
            <p>Contact: {formData.contactNo}</p>
            <p>LinkedIn: {formData.linkedin}</p>
            
            <h4>Education</h4>
            <p>SSC - University: {formData.SSC}</p>
            <p>Year: {formData.SSCYear}</p>
            <p>Stream: {formData.SSCStream}</p>
            <p>Score: {formData.SSCScore}</p>
            <p>HSC - University: {formData.HSC}</p>
            <p>Year: {formData.HSCYear}</p>
            <p>Stream: {formData.HSCStream}</p>
            <p>Score: {formData.HSCScore}</p>
            <p>Diploma - University: {formData.Diploma}</p>
            <p>Year: {formData.DiplomaYear}</p>
            <p>Stream: {formData.DiplomaStream}</p>
            <p>Score: {formData.DiplomaScore}</p>
            <p>Graduation - University: {formData.Graduation}</p>
            <p>Year: {formData.GraduationYear}</p>
            <p>Stream: {formData.GraduationStream}</p>
            <p>Score: {formData.GraduationScore}</p>

            <h4>Experience</h4>
            <p>Company: {formData.Experience1Company}</p>
            <p>Location: {formData.Experience1Location}</p>
            <p>Role: {formData.Experience1Role}</p>
            <p>Duration: {formData.Experience1Duration}</p>

            <h4>Skills</h4>
            <p>Technical Skills: {formData.technicalSkills}</p>
            <p>Soft Skills: {formData.softSkills}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeForm;