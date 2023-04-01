import { Box, Button, TextField } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    zipCode: "",
    city: "",
    address: ""
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("Please fill in this field!"),
    lastName: yup.string().required("Please fill in this field!"),
    email: yup.string().email("Please enter a valid email!").required("Please fill in this field!"),
    phoneNumber: yup.string().matches(phoneRegExp, "Please enter a valid phone number!").required("Please fill in this field!"),
    age: yup.string().required("Please fill in this field!"),
    zipCode: yup.string().required("Please fill in this field!"),
    city: yup.string().required("Please fill in this field!"),
    address: yup.string().required("Please fill in this field!")
    
})


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m="20px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box 
                    display="grid" 
                    gap="30px" 
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))" 
                    sx={{ "& > div": {gridColumn: isNonMobile ? undefined : "span 4"} }}
                    >
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="First Name" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.firstName} 
                        name="firstName" 
                        error={!!touched.firstName && !!errors.firstName} 
                        helperText={touched.firstName && errors.firstName} 
                        sx={{ gridColumn: "span 2" }}
                        />
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="Last Name" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.lastName} 
                        name="lastName" 
                        error={!!touched.lastName && !!errors.lastName} 
                        helperText={touched.lastName && errors.lastName} 
                        sx={{ gridColumn: "span 2" }}
                        />
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="Email" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.email} 
                        name="email" 
                        error={!!touched.email && !!errors.email} 
                        helperText={touched.email && errors.email} 
                        sx={{ gridColumn: "span 4" }}
                        />
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="Phone Number" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.phoneNumber} 
                        name="phoneNumber" 
                        error={!!touched.phoneNumber && !!errors.phoneNumber} 
                        helperText={touched.phoneNumber && errors.phoneNumber} 
                        sx={{ gridColumn: "span 2" }}
                        />
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="Age" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.age} 
                        name="age" 
                        error={!!touched.age && !!errors.age} 
                        helperText={touched.age && errors.age} 
                        sx={{ gridColumn: "span 1" }}
                        />
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="City" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.city} 
                        name="city" 
                        error={!!touched.city && !!errors.city} 
                        helperText={touched.city && errors.city} 
                        sx={{ gridColumn: "span 1" }}
                        />
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="Address" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.address} 
                        name="address" 
                        error={!!touched.address && !!errors.address} 
                        helperText={touched.address && errors.address} 
                        sx={{ gridColumn: "span 3" }}
                        />
                        <TextField 
                        fullWidth 
                        variant="filled" 
                        type="text" 
                        label="Zip Code" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={values.zipCode} 
                        name="zipCode" 
                        error={!!touched.zipCode && !!errors.zipCode} 
                        helperText={touched.zipCode && errors.zipCode} 
                        sx={{ gridColumn: "span 1" }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Create New User
                        </Button>
                    </Box>
                </form>
            )}
            </Formik>
        </Box>
    )
}

export default Form;