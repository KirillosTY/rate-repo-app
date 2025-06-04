import {TextInput,View,Text, StyleSheet, Pressable} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/SignIn';
import { useNavigate } from 'react-router-native';
import useSignUp from '../../hooks/SingUp';


const SingUp = () => {
  const navigate = useNavigate();
  const {signIn} = useSignIn();
  const {signUp} = useSignUp()

  const onSubmit =  async(values) => {

    const user = {
      username:values.username,
      password:values.password,
      
    };
    try {

      await signUp(user)

      await signIn(user);
      console.log('Got here');
      
     navigate('/');
      
    } catch(error){
      console.log('error', error);
    }

  };



  return (<SignUpContainer onSubmit={onSubmit}/>);
};



export const SignUpContainer = ({onSubmit}) => {


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

  const initialValues = {
    username:'',
    password:'',
    repeatPass:''
  };

  

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, 'Must contain at least 4 characters')
      .required('Username is required'),
    password: yup
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .required('Password is required'),
    repeatPass: yup
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Password is required')
  });

  
    const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit
    });

  return (<View>
    <TextInput 
    style={styles.textInputs}
    value={formik.values.username}
    onChangeText={formik.handleChange('username')}
    placeholder='Username'/>
    {formik.touched.username && formik.errors.username && (
     <Text style={{ color: 'red' }}>{formik.errors.username}</Text>
    )}
    <TextInput
      secureTextEntry
      style={styles.textInputs}
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
      placeholder='Password'/>
    {formik.touched.password && formik.errors.password && (
     <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
    )}
     <TextInput
      secureTextEntry
      style={styles.textInputs}
      value={formik.values.repeatPass}
      onChangeText={formik.handleChange('repeatPass')}
      placeholder='PasswordRepeat'/>
    {formik.touched.repeatPass && formik.errors.repeatPass && (
     <Text style={{ color: 'red' }}>{formik.errors.repeatPass}</Text>
    )}
    <Pressable onPress={formik.handleSubmit}>
        <Text  style={styles.button}>Sign in</Text>
      </Pressable>
  </View>);

}

export default SingUp;