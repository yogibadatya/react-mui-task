import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Start Location', 'Clock In', 'Working On','Clock out'];



export default function CustomStepper({isFormSubmited}) {
   
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={isFormSubmited ? 1 : 0} alternativeLabel>
      {steps.map((label, index) => {
          const labelProps = {};
          // if (isStepFailed(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption" color="error">
          //       {/* Alert message */}
          //     </Typography>
          //   );

          //   labelProps.error = true;
          // }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}