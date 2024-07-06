import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import unidecode from 'unidecode';


import capitalizeFirstLetter from '../../pages/Capitalieze/capitalize';
import apiCategory from '../../../api/apiCategory';


function EditCategory() {

    const {id} = useParams();
    
    const [catEdit, setCatEdit] = useState([]);
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        
        apiCategory.getCategoryById(id).then(res => {         
            const categoryData = res.data         
            setCatEdit(categoryData);
            console.log("cat edit: ",categoryData);
            return categoryData;    
        });

        apiCategory.getAll().then(res => {
            try{
              const categoryData = res.data.map(item =>{
                return {
                  id: item.id,
                  name: item.name,
                }
              });
              setCategories(categoryData);       
            }
            catch(err){
                console.log("Category Error:",err.message);
            }


        })
    }, [id,])


    const [formData, setFormData] = useState({
        name:'',       
    });

    const handleChange = (e) => {
        setFormData(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        var check = false;        
        categories.map((cate) => {
            
            if(cate.name === formData.name){
              check = !check
            }            
        })

        if(!check){

            if(formData.name === ''){
                formData.name = catEdit[0]?.name;
            }
           
            const data = {
                name: formData
            }

            try {
                const response = await apiCategory.editCategory(id, data, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
    
                toast.info(`Update ${formData.name} successfully!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: {
                        top: "-50%",
                        transform: "translateY(50%)",
                        marginRight: "2%",
                        width: "fit-content",
                    },
                });
    
                console.log('response:',response);
                navigate('/admin/dashboard/category-admin')
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }
        else{
            toast.error(`Category ${formData.category_name} already exist!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                    top: "-50%",
                    transform: "translateY(50%)",
                    marginRight: "2%",
                    width: "fit-content",
                },
            });
        }
        
    }    

   


  return (
    catEdit && <div>
      <h1>edit category</h1>
    {
        console.log("cate edit: ", catEdit)
    }
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Category Name:</label>        
        <input type="text" name="name" placeholder={catEdit.name}  onChange={handleChange} />

        <br/>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default EditCategory
