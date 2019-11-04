import React, { useContext} from 'react';
import { AppProductContext } from './AppContext';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <StepOne />
      case 1:
        return <StepTwo />
      case 2:
        return <StepThree />
      default:
        return <p>Ups, reload please...</p>
    }
  }

function ProductBuy(){
    const {
        activeStep, steps
    } = useContext(AppProductContext);
    
    return (
        <React.Fragment>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className="product-buy-step-container">
                {getStepContent(activeStep)}
            </div>
        </React.Fragment>
    )
}

export default ProductBuy;