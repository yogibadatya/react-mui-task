import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const validateForm = Yup.object().shape({
  branchCode: Yup.array().min(1).required('branchCode is required'),
  branch: Yup.array().min(1).required("branch Type Is Required"),
  brand: Yup.array().min(1).required('brand is required'),
  salesType: Yup.string().required("Sales Type Is Required"),
  productType: Yup.string().required("Product Type Is Required"),
})
const Form = ({ handleFormSubmit }) => {

  const formik = useFormik({
    initialValues: {
      branchCode: [],
      branch: [],
      brand: [],
      salesType: "",
      productType: ""

    },
    validationSchema: validateForm,
    onSubmit: (values) => {
      console.log("submitd values", values)
      handleFormSubmit(true)

    }
  })
  useEffect(() => {
    const isValid = formik.values.branchCode.length && formik.values.branch.length && formik.values.brand.length && Object.keys(formik.values.productType).length && Object.keys(formik.values.salesType).length && !Object.values(formik.errors).filter(Boolean).length
    // handleFormSubmit(false)
    isValid && formik.handleSubmit()

  }, [formik.values, formik.errors]);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={6}>
            <Autocomplete
              multiple
              size='small'
              id="branchCode"
              options={options}
              getOptionLabel={(option) => option.value}
              filterSelectedOptions

              onChange={(event, newValue) => {
                if (newValue.length) {
                  formik.setFieldValue('branchCode', newValue || '');
                } else {
                  formik.setFieldValue('branchCode', [])
                  handleFormSubmit(false)
                }
              }}

              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Branch Code"
                  placeholder="Type.."
                  error={formik.touched.branchCode && Boolean(formik.errors.branchCode)}
                  helperText={formik.touched.branchCode && formik.errors.branchCode}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            {/* <div> */}
            <Autocomplete
              multiple
              size='small'
              id="brand"
              options={options}
              getOptionLabel={(option) => option.value}
              filterSelectedOptions
              onChange={(event, newValue) => {
                if (newValue.length) {
                  formik.setFieldValue('brand', newValue || '');
                } else {
                  formik.setFieldValue('brand', [])
                  handleFormSubmit(false)
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Brand"
                  placeholder="Type.."
                  error={formik.touched.brand && Boolean(formik.errors.brand)}
                  helperText={formik.touched.brand && formik.errors.brand}
                />
              )}
            />

          </Grid>
          <Grid item xs={12}>

            <Autocomplete
              multiple
              size='small'
              id="branch"
              options={options}
              getOptionLabel={(option) => option.value}
              filterSelectedOptions
              onChange={(event, newValue) => {
                if (newValue.length) {
                  formik.setFieldValue('branch', newValue || '');
                } else {
                  formik.setFieldValue('branch', [])
                  handleFormSubmit(false)
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Branch"
                  placeholder="Type.."
                  error={formik.touched.branch && Boolean(formik.errors.branch)}
                  helperText={formik.touched.branch && formik.errors.branch}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>

            <Autocomplete

              size='small'
              id="salesType"
              options={options}
              getOptionLabel={(option) => option.value}
              filterSelectedOptions
              onChange={(event, newValue) => {
                if (!newValue) {
                  handleFormSubmit(false)
                }
                formik.setFieldValue('salesType', newValue?.value || '');
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Sales Types"
                  placeholder="Type.."
                  error={formik.touched.salesType && Boolean(formik.errors.salesType)}
                  helperText={formik.touched.salesType && formik.errors.salesType}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>

            <Autocomplete

              size='small'
              id="productType"
              options={options}
              getOptionLabel={(option) => option.value}
              filterSelectedOptions
              onChange={(event, newValue) => {
                if (!newValue) {
                  handleFormSubmit(false)
                }
                formik.setFieldValue('productType', newValue?.value || '');
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product Type"
                  placeholder="Type.."
                  error={formik.touched.productType && Boolean(formik.errors.productType)}
                  helperText={formik.touched.productType && formik.errors.productType}
                />
              )}
            />
          </Grid>
        </Grid>


      </Box>

    </div>
  )
}

export default Form
