import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// api call
export const fetchProducts = createAsyncThunk('products/fetchProducts',async()=>{   // 'products/fetchProducts' is action string(it is first argument of createAsyncThunk). products is slice name, and enth action executeyyumbozhano api call nadakkunne aa acton name nem usithu.
    const result = await axios.get('https://dummyjson.com/products')  // url
    localStorage.setItem("allProducts",JSON.stringify(result.data.products))
    // console.log(result.data.products);    // in info of console, array of data will appear after dispatch in home. also export fetchProducts here and import fetchProducts in home page. if array of data came, then api call is success.
    return result.data.products    // axioste body return cheyyunnath datalu aanu. 
    
})
// api callitha data loadavandath home pagill aanu. for loading,  useEffect hook is used in home page and for executing action from a component useDispatch hook is also used in home page.  
// after api call data kitti, then kitiya datene allProductsikk kodkanam. but athinu vendit reducersne usiyan pettilla, because asynchronous operations executeyyan normal reducersnu pettilla, reduxlu ellm synchronous aayitanu execute cheyyunnath. so asynchronous aayit ithine handle cheyyan pettunna reducer venam. that kind of reducer is extraReducers.


const productSlice = createSlice({
    name:"products",
    initialState:{
        allProducts:[],     // many products are there. not a single product. so created array.
        allProductsDummy:[],
        error: "",
        loading: false    // initially spinner is not loading, so false.
    },
    reducers:{
        searchProduct:(state,action)=>{
            state.allProducts=state.allProductsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))    // toLowerCase() used because user correct aa product te name thanne alla adikkuka. so engane adichalum aa product kitan vendit aanu.
        }

    },
    extraReducers:(builder)=>{      // normal reducers don't support asynchronous operations. that's why extraReducers used. builder is default for adding cases.
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{  // allProductste ullikk data veran vendit state, action argumentayit passithu.
            state.allProducts = action.payload      // state here is allProducts
            state.allProductsDummy = action.payload
            state.loading = false
        }),
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allProducts = []   // pending state, so no data inside it. so put empty array. rejected case also like this.
            state.allProductsDummy = []
            state.loading = true
        }),
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allProducts = []   // created error case in initialState in slice.
            state.allProductsDummy = []
            state.error = "api failed"   // put api failed message.
            state.loading = false
        })

    }
})

// allProductsikk data vannu kazhinjal athine display cheyyikkanam. componentikk display cheyyikkanam, for that in home page, useSelector nnu prnja hook usithatt eeth statene aano vendath athine select cheyyanam.


export const {searchProduct} = productSlice.actions
export default productSlice.reducer


// API call is asynchronous operation. but redux executes synchronously. so reduxinte ullil asynchronous function executiyan vendit createAsyncThunk useyum.
// Reducers do not support asynchronous operations, so we use createAsyncThunk for async logic and handle its actions in extraReducers.

// website -> search dummyjson-> docs-> products-> copy link of url 