import React from 'react';



function Faq() {
  return (
    <div>
      <div>
        <section id="faq" className="py-md-5">
          <h2 className="my-5 text-center">FAQ</h2>
          <div className='container'>
            <div className="accordion w-75 mx-auto" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can I apply for an agriculture loan?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    To apply for an agriculture loan, you can visit our nearest branch or apply online through our website. You will need to provide necessary documents such as land ownership documents, proof of income, and collateral information.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What are the eligibility criteria for agriculture loans?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The eligibility criteria for agriculture loans include factors such as land ownership, credit history, income stability, and repayment capacity. Specific requirements may vary depending on the type of loan and lending institution.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What documents are required for applying for agriculture loans?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Typically, you will need to provide documents such as land ownership documents, government-issued identification, income proof (such as tax returns or bank statements), and collateral details (if applicable).
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What is the repayment schedule for agriculture loans?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The repayment schedule for agriculture loans varies depending on the loan amount, term, and interest rate. Typically, repayment can be structured on a monthly, quarterly, or annual basis, aligned with the borrower's cash flow from farming activities.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                  What are the interest rates for agriculture loans?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  Interest rates for agriculture loans can vary depending on factors such as the loan amount, term, type of loan, and prevailing market conditions. It's best to check with your lender for current rates and terms.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                  Can I use agriculture loans for purchasing equipment or machinery?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  Yes, agriculture loans can often be used for purchasing equipment, machinery, seeds, fertilizers, and other inputs essential for farming activities. However, it's important to clarify with your lender regarding specific permitted uses.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                  Are there any government schemes or subsidies available for agriculture loans?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  Yes, many governments offer various schemes, subsidies, and incentives to support agricultural activities, including access to subsidized loans, interest rate concessions, and loan repayment assistance programs. It's advisable to check with relevant government agencies or agricultural departments for information on available schemes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
      
    </div>
  );
}

export default Faq;
