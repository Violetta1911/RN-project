import React, {useState} from 'react';
 import { Button, TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   email: Yup.string().required('Required'),
 });

 const orderValue = '10';

 
 export const FormScreen = props => {
     const [result, setResult]= useState('');
     const [resultOrder, setResultOrder]= useState('');
  
       return (
            <View>
        
        <Formik
          initialValues={{ email: '', order: '' }}
          onSubmit={(values, {resetForm}) => {setResult(values.email); setResultOrder(values.order); console.log(values); resetForm({values:''})}}
          validationSchema={SignupSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View>
              <TextInput
              style={errors.email ? styles.inputError : styles.input}
                placeholder='enter your email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TouchableOpacity onPress={()=> handleChange('order', orderValue)}>
                  <View style = {{backgroundColor: 'blue', borderRadius: 10, width: 70, padding: 10, alignSelf: 'center', marginVertical: 20 }}>
                       <Text style={{textAlign: 'center', color: errors.order ? 'white' : 'black'} }>{orderValue}</Text>
                 </View>
              </TouchableOpacity>
              <View style={{width:'30%', alignSelf: 'center'}}>
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            </View>
          )}
        </Formik>
             <Text> Your email is : {result}</Text>
        </View>
    
       ) 
 };

   
    const styles = StyleSheet.create({
        input:{
           borderColor: 'blue',
           borderWidth: 1,
           margin: 10,
           borderRadius: 10,
           textAlign: 'center',
        },
        inputError:{
           borderColor: 'red',
           borderWidth: 1,
           margin: 10,
           borderRadius: 10,
           textAlign: 'center',
        }
    })

