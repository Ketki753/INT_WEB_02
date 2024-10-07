import React from 'react';
import './Help.css';

const Help = () => (
  <section className="faq-section">
    <h2>Frequently Asked Questions (FAQs)</h2>
    <ul>
      <li>
        <strong>1. How can I download my resume?</strong>
        <p>After filling in all the required details, you can preview your resume by clicking the 'Preview' button. Once you're satisfied with the preview, click the 'Download' button to generate and download your resume in PDF format.</p>
      </li>
      <li>
        <strong>2. Can I edit my resume after downloading?</strong>
        <p>Yes, you can edit your resume anytime by simply reloading the app, updating the necessary fields, and downloading it again. The app allows you to make as many changes as you need before finalizing your resume.</p>
      </li>
      <li>
        <strong>3. Is my data saved for future use?</strong>
        <p>Currently, the app does not store data between sessions. Each time you open the app, you'll need to re-enter your details. We recommend saving a local copy of your resume or keeping your information handy for reuse.</p>
      </li>
      <li>
        <strong>4. How do I choose a resume template?</strong>
        <p>In the 'Select Resume Template' section, you can choose from the available template options. Once selected, the preview will update to show how your resume will look with the chosen template.</p>
      </li>
      <li>
        <strong>5. Can I customize the resume templates?</strong>
        <p>At the moment, the templates are pre-designed and not customizable. You can choose between different templates, but you cannot modify their structure or layout. However, we plan to introduce more templates soon!</p>
      </li>
      <li>
        <strong>6. Is the resume builder free?</strong>
        <p>Yes, this resume builder is completely free to use. You can create, preview, and download resumes without any cost. It's designed to help job seekers quickly create a professional resume.</p>
      </li>
    </ul>
  </section>
);

export default Help;