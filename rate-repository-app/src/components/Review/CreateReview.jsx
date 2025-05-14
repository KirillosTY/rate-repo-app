import Text from "../TextSets/Text";
import {TextInput,View, StyleSheet, Pressable} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-native';
import useCreateReview from '../../hooks/useReviewCreation'

const CreateReview =() => {
  const navigate = useNavigate();
  const {createReview, result} = useCreateReview()
  
  const onSubmit = async(values, formikHelpers) => {
    const review ={
      ownerName:values.repositoryOwner,
      repositoryName:values.repositoryName,
      rating:Number(values.rating),
      text:values.text
    }


    try {
      const {data, error} = await createReview(review)
      console.log('data inputted', data)
      navigate('/'+data.createReview.repositoryId)
    } catch ( error){
      console.log('caught', error)
      formikHelpers.resetForm()
      console.log('resetForm', formikHelpers)
    
  }


  };
  return (<CreateReviewContainer onSubmit={onSubmit}/>)
}


export default CreateReview;



export const CreateReviewContainer = ({onSubmit}) =>{


  const styles = StyleSheet.create({
    textInputs: {
      padding:10,
      borderColor: 'black',
      borderWidth:1,
      margin:10
    },
    button: {
      alignSelf:'center',
      width:'100%',
      backgroundColor: '#0366d6',
      color:"#e1e8e3",
      fontSize: 20,
      padding:5,
      fontWeight:'bold',
      textAlign:'center'
    }
  });

const validationSchema = yup.object().shape({
  repositoryOwner: yup
    .string()
    .required('Repository owner is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup.number()
    .min(0)
    .max(100)
    .integer()
    .required('Rating required'),
  text: yup.string()
  .optional()

  });


  const initialValues = {
    repositoryOwner:'',
    repositoryName:'',
    rating:'',
    text:''

  }


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
    
  })

  return (<View>
    
    <TextInput
      style={styles.textInputs}
      value={formik.repositoryOwner}
      onChangeText={formik.handleChange('repositoryOwner')}
      placeholder='Repository owner'/>
      {formik.touched.repositoryOwner && formik.errors.repositoryOwner && (
         <Text style={{ color: 'red' }}>{formik.errors.repositoryOwner}</Text>
      )}
      
    <TextInput
      style={styles.textInputs}
      value={formik.repositoryName}
      onChangeText={formik.handleChange('repositoryName')}
      placeholder='Repository name'/>
      {formik.touched.repositoryName && formik.errors.repositoryName && (
         <Text style={{ color: 'red' }}>{formik.errors.repositoryName}</Text>
      )}
    <TextInput
      style={styles.textInputs}
      value={formik.rating}
      onChangeText={formik.handleChange('rating')}
      placeholder='Rating'/>
      {formik.touched.rating && formik.errors.rating && (
         <Text style={{ color: 'red' }}>{formik.errors.rating}</Text>
      )}
      <TextInput
      style={styles.textInputs}
      value={formik.text}
      onChangeText={formik.handleChange('text')}
      placeholder='Review'/>
      {formik.touched.text && formik.errors.text && (
         <Text style={{ color: 'red' }}>{formik.errors.text}</Text>
      )} 
    <Pressable onPress={formik.handleSubmit}>
          <Text  style={styles.button}>Submit review</Text>
    </Pressable>


  </View>);


}