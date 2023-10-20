import { useState } from 'react';

const messages = ['Learn React', 'Apply for jobs', 'Invest your new income'];

export default function App() {
  return (
    <div className="App">
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    setStep((step) => (step > 1 ? step - 1 : 1));
  }

  function handleNext() {
    setStep((step) => (step < 3 ? step + 1 : 3));
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(messages[step - 1])}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>&lt;</span>Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next<span>&gt;</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
