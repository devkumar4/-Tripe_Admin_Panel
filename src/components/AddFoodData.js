import React, { useState } from 'react';
import '../components/AddFoodData.css'
import { db, storage } from '../firebase/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { NavBar } from './NavBar/NavBar';
const AddFoodData = () => {
    const [FoodName, setfoodName] = useState('');
    const [FoodPrice, setfoodPrice] = useState('');
    const [FoodImage, setfoodImage] = useState(null);
    const [FoodCategory, setfoodCategory] = useState('');
    const [FoodDescription, setFoodDescription] = useState('');

    const [restaurantName, setRestaurantName] = useState('')
    const [restaurantPhone, setrestaurantPhone] = useState('');
    const [foodType, setfoodType] = useState('');
    const [mealType, setmealType] = useState('');
    const [foodAddOn, setfoodAddOn] = useState('');
    const [foodAddOnPrice, setfoodAddOnPrice] = useState('');
    const [reasturantEmail, setreasturantEmail] = useState('');
    const [resturantAddressBuilding, setresturantAddressBuilding] = useState('');
    const [resturantAddressCity, setresturantAddressCity] = useState('');
    const [restaurantAddressStreet, setresturantAddressStreet] = useState('');
    const [restaurantAddressPincode, setresturantAddressPincode] = useState('')


    const handelSubmit = (e) => {
        e.preventDefault()

        if (FoodImage == null) {
            alert('Please select a Image to display')
            return;
        }
        else {
            const imageref = ref(storage, `Foodimages/${FoodImage.name}`)
            uploadBytes(imageref, FoodImage)
                .then(() => {
                    alert('Image successfully uploaded');
                    getDownloadURL(imageref)
                        .then((url) => {
                            const foodData = {
                                FoodName,
                                FoodPrice,
                                FoodImageUrl: url,
                                FoodCategory,
                                FoodDescription,
                                restaurantName,
                                // restaurantAddress,
                                restaurantPhone,
                                foodType,
                                mealType,
                                foodAddOn,
                                foodAddOnPrice,
                                reasturantEmail,
                                resturantAddressBuilding,
                                restaurantAddressStreet,
                                resturantAddressCity,
                                restaurantAddressPincode,
                                id: new Date().getTime().toString(),
                            }
                            console.log(foodData);
                            try {
                                const docRef = addDoc(collection(db, "foodData"), foodData)
                                alert("Document Added Successfully : ", docRef.id);
                            } catch (err) {
                                alert("Error adding the document : ", err);
                            }

                        })
                })
        }


    }
    return (
        <div>
            <NavBar />
            <div className='form-outer'>
                <h1>Add Food Data</h1>
                <form className='form-inner'>
                    <label>Food Name</label>
                    <input type='text' name='food_Name'
                        onChange={(e) => { setfoodName(e.target.value) }}
                    />
                    <br />
                    <label>Food Description</label>
                    <input type='text' name='food_Description'
                        onChange={(e) => { setFoodDescription(e.target.value) }}
                    />
                    <br />
                    <div className='form-row'>
                        <div className='form-col'>
                            <label>Food Price</label>
                            <input type='number' name='food_Price'
                                onChange={(e) => { setfoodPrice(e.target.value) }}
                            />
                        </div>
                        <div className='form-col'>
                            <label>Food Type</label>
                            <select name='food_type' onChange={(e) => { setfoodType(e.target.value) }}>
                                <option value='null'>Select Food Type</option>
                                <option value='veg'>Veg</option>
                                <option value='non-veg'>Non Veg</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className='form-row'>
                        <div className='form-col'>
                            <label>Food Category</label>
                            <select name='food_category' onChange={(e) => { setfoodCategory(e.target.value) }}>
                                <option value="null">Select Food Category</option>
                                <option value="indian">Indian</option>
                                <option value="chinese">Chinese</option>
                                <option value="italian">Italian</option>
                                <option value="mexican">Mexican</option>
                                <option value="american">American</option>
                            </select>
                        </div>
                        <div className='form-col'>
                            <label>Meal Type</label>
                            <select name='meal_type' onChange={(e) => { setmealType(e.target.value) }}>
                                <option value="null">Select Meal Type</option>
                                <option value="dinner">Dinner</option>
                                <option value="staters">Starters</option>
                                <option value="breakfast">BreakFast</option>
                                <option value="liquid">Liquid</option>

                            </select>
                        </div>
                    </div>
                    <br />
                    <div className='form-row'>
                        <div className='form-col'>
                            <label>Add on</label>
                            <input type="text" name='food_addon' onChange={(e) => { setfoodAddOn(e.target.value) }} />
                        </div>
                        <div className='form-col'>
                            <label>Add on Price</label>
                            <input type="text" name='food_addon_price' onChange={(e) => { setfoodAddOnPrice(e.target.value) }} />
                        </div>
                    </div>
                    <label>Food Category</label>
                    <input type='text' name='food_Category'
                        onChange={(e) => { setfoodCategory(e.target.value) }}
                    />
                    <br />
                    <label>Food Image</label>
                    <input type='file' name='food_Image'
                        onChange={(e) => { setfoodImage(e.target.files[0]) }}
                    />
                    <br />
                    <label>Restaurant Name</label>
                    <input type='text' name='restaurant_Name'
                        onChange={(e) => { setRestaurantName(e.target.value) }}
                    />
                    <br />
                    <div className='form-row'>
                        <div className='form-col'>
                            <label>Restaurant Building Number/Name</label>
                            <input type='text' name='restaurant_address_building' onChange={(e) => { setresturantAddressBuilding(e.target.value) }} />
                        </div>

                        <div className='form-col'>
                            <label>Restaurant Street/Area Name</label>
                            <input type='text' name='restaurant_address_street' onChange={(e) => { setresturantAddressStreet(e.target.value) }} />
                        </div>

                    </div>
                    <br />
                    <div className='form-row'>
                        <div className='form-col'>
                            <label>Restaurant City</label>
                            <input type='text' name='restaurant_address_city' onChange={(e) => { setresturantAddressCity(e.target.value) }} />
                        </div>

                        <div className='form-col'>
                            <label>Restaurant Pin-code</label>
                            <input type='text' name='restaurant_address_pincode' onChange={(e) => { setresturantAddressPincode(e.target.value) }} />
                        </div>

                    </div>
                    <div className='form-row'>
                        <div className='form-col'>
                            <label>Restaurant E-mail</label>
                            <input type='text' name='restaurant_address_email' onChange={(e) => { setreasturantEmail(e.target.value) }} />
                        </div>

                        <div className='form-col'>
                            <label>Restaurant Phone no.</label>
                            <input type='text' name='restaurant_address_phone' onChange={(e) => { setrestaurantPhone(e.target.value) }} />
                        </div>

                    </div>
                    <button className='btn' onClick={handelSubmit}>Add Food</button>
                </form>
            </div>
        </div>
    );
}

export default AddFoodData;
