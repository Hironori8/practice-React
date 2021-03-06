import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Keio from './keio_univ.png';
import Yahoo from './yahoo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  logo: {
    marginTop: theme.spacing(4),
				maxHeight:300,
				maxWidth:300,
  },
}));

function getStepsVerJP() {
  return ['開智高校 (2011-2014)', '慶應義塾大学 (2015-2019)', '慶應義塾大学大学院 (2019-2021)','Yahoo Japan (2021-)'];
}
function getStepsVerEng() {
  return ['Kaichi High Sch. (2011-2014)', 'Keio Univ. (2015-2019)', 'Keio Univ. Grad. Sch. (2019-2021)','Yahoo Japan (2021-)'];
}
function getSteps(isEng){
		if(isEng){
				return getStepsVerEng();
		}else{
				return getStepsVerJP();
		}
}

function getStepContent(step,isEng) {
  switch (step) {
    case 0:
						if(isEng){
								return ('Member of Basketball Club');
						}else{
								return ('バスケットボール部所属');
						}
    case 1:
						if(isEng){
								return ('Faculity of Sci. and Tech. , Dept. Information and Comupter Sci. , Sasase Lab');
						}else{
								return ('理工学部 情報工学科 笹瀬研究室所属');
						}
    case 2:
						if(isEng){
								return ('Sch. of Sci. for Open and Environmental Systems, Center for Comupter Sci. , Sasase Lab.');
						}else{
								return ('開放環境科学専攻情報工学専修 笹瀬研究室所属');
						}
    case 3:
						if(isEng){
								return 'Coming soon';
						}else{
								return '近日公開';
						}
    default:
      return 'Unknown step';
  }
}

function getStepImg(step, className){
		switch (step){
				case 1:
						return (
								<img src={Keio} className={className} alt ="Keio Logo"/>
						);
				case 2:
						return (
								<img src={Keio} className={className} alt="Keio Logo"/>
						);
				case 3:
						return (
								<img src={Yahoo} className={className} alt="Yahoo Logo"/>
						);
				default : 
						return (
								<p>no contents</p>
						);
		}
}

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps(props.isEng);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index,props.isEng)}</Typography>
														<div>{getStepImg(index, classes.logo)}</div>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
