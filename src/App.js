import './App.css';
import {Arrow} from "./components/Arrow";
import {CarouselItem} from "./components/CarouselItem";
import {DropDown} from "./components/DropDown";
import { useState } from 'react';
import React from 'react';

function App() {

  const [currentActiveIndex, setCurActiveIndex] = useState(1);
  const [moveDirection, setMoveDirection] = useState(null);
  const [moveLength, setMoveLength] = useState(0);
  const categories = [
    {
      category: "TShirts", 
      label: "T Shirts"
    },
    {
      category: "FormalPants",
      label: "Formal Pants"
    },
    {
      category: "JeansPants",
      label: "Jeans Pants"
    }, 
    {
      category: "FormalShirts",
      label: "Formal Shirts"
    },
    {
      category: "CasualShirts",
      label: "Casual Shirts"
    }];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterApplied, setFilterApplied] = useState(false);

  const config = [
    {
      imgUrl: "https://imgaz1.chiccdn.com/thumb/large/oaupload/ser1/newchic/images/59/30/c1f0a73b-e8fd-4efe-b132-811e8b689429.jpg",
      category: "CasualShirts",
      price: 950
    },
    {
      imgUrl: "https://cdn.shopify.com/s/files/1/0070/7032/files/tshirt-business8-min_838a2996-f195-4c1d-a4d1-034bc0a9a095.jpg?v=1597402071",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://static.turbosquid.com/Preview/2016/02/26__02_29_43/JeansFoldedobj3dmodel02.jpg7b5ca11c-2031-47ca-bb4d-74b56e8e5136Original.jpg",
      category: "JeansPants",
      price: 950
    },
    {
      imgUrl: "https://ik.imagekit.io/xqgyjenzqsmnk/image/tr:h-600,w-565,cm-pad_resize/catalog/Alma-mater/Custom%20products/new/t-shirts%20(1).png",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jxR5F-NYwyXT6CJLt1jAKBwq2hf3_cQSow&usqp=CAU",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvddlxsZ0baMCKPSaFiLYRSoyJ3cKBxfKtA&usqp=CAU",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://5.imimg.com/data5/QY/VY/MY-34278/yellow-round-necked-t-shirt-250x250.png",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://cdn.shopify.com/s/files/1/0161/0482/products/AyeGear_T5_tshirt_with_pockets_clothing_fashion_style_hiking_fishing_cycling_scottevest_pickpocket_proof_concealed5.jpg?v=1502127434",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://contents.mediadecathlon.com/p1772203/cfdc5f2e3d61aca087d99dddeffd3040/p1772203.jpg",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://contents.mediadecathlon.com/p551528/2000x2000/sq/fts100_fitness_cardio_t-shirt_-_grey_domyos_by_decathlon_8278626_551528.jpg?k=8e0ea84d0e765c80ea0cb6dff77d2ff2",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://5.imimg.com/data5/XY/DU/SP/SELLER-58017149/mens-plain-t-shirt-500x500.jpg",
      category: "TShirts",
      price: 950
    },
    {
      imgUrl: "https://kmd-assets.imgix.net/catalog/product/1/5/15108_605_federatewomenslsshirt_v2_a.jpg",
      category: "CasualShirts",
      price: 950
    },
    {
      imgUrl: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg",
      category: "CasualShirts",
      price: 950
    },
    {
      imgUrl: "https://static.cilory.com/359778-large_default/nologo-navy-yellow-casual-checks-shirt.jpg",
      category: "CasualShirts",
      price: 950
    },
    {
      imgUrl: "https://3.imimg.com/data3/KK/HT/MY-15585123/men-s-designer-checked-shirt-500x500.jpg",
      category: "CasualShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJfySJzkuiXLjeALQuYcKkTA16DZUKPDHuQw&usqp=CAU",
      category: "CasualShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGDfMdg9Xa9hUBtXuvaH8oJnhELX7b5LgoA&usqp=CAU",
      category: "FormalShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAx_skL_9UZZcExsuVY5ycoXBDWcfU2-_8rg&usqp=CAU",
      category: "FormalShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooOjBr_pzFfthr2hWepjwm6qhvYA5d38F3A&usqp=CAU",
      category: "FormalShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSFsa23vs3DteVV5XXuF5F170w-twsI3x5Q&usqp=CAU",
      category: "FormalShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElykBCEZ9hsLftbq5LNQYyQ_RLIB2KpaPSA&usqp=CAU",
      category: "FormalShirts",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvJV-cKUHq_TbfXRKHjeymoV3ckEF0Eg8iw&usqp=CAU",
      category: "FormalShirts",
      price: 950
    },
    {
      imgUrl: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/watermarked/2018-10-31_113353.876068Formal_Pant.jpg",
      category: "FormalPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAW2vK8WIwBUEYsHzzzMN8fMrjx6EE4FJK5Q&usqp=CAU",
      category: "FormalPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQO9IxEkAy4TnQtc36SRWBi15HcEajwiOgmg&usqp=CAU",
      category: "FormalPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPN-IPH-ZF2LH6VFTV_GR1t8IQTfqJTjMQA&usqp=CAU",
      category: "FormalPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDr03WWl6fi4Ax-7qfPysLTj-roTa8M43ZAQ&usqp=CAU",
      category: "FormalPants",
      price: 950
    },
    {
      imgUrl: "https://cdn.shopify.com/s/files/1/0791/2181/products/gn_pant_fold_300x.jpg?v=1495584274",
      category: "JeansPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_5iM8t142_zzbFwd2nAUpqaOVIt27Z8CcA&usqp=CAU",
      category: "JeansPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXekejntuij2HA8FGXVoT9VNjloTu9tZ1_aQ&usqp=CAU",
      category: "JeansPants",
      price: 950
    },
    {
      imgUrl: "https://i.pinimg.com/474x/3e/0c/d8/3e0cd80c8c118688690ec02599564fe1.jpg",
      category: "JeansPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXJDLiylafHgKo2BUw8tvkA9GEQqU4oFb0w&usqp=CAU",
      category: "JeansPants",
      price: 950
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-0j86x_iRcbv4qbYSECSpp-0SDkJu_Hq5Q&usqp=CAU",
      category: "JeansPants",
      price: 950
    },
    
    
  ]

  const displayItems = filterApplied ? config.filter(item => item.category === selectedCategory) : config;

  return (
    <React.Fragment>
    <div className="App">
      <div>
        <DropDown 
          name="category" 
          elements={categories} 
          onClick = {
            (category) => {
              if(category === selectedCategory){
                setSelectedCategory(null)
                setFilterApplied(false)
              }else {
                setSelectedCategory(category)
                setFilterApplied(true)
              }
              setMoveLength(0)
              setCurActiveIndex(1)
            }
          }
          selectedCategory={selectedCategory} 
        />
      </div>
      <div className="productContainer">
        {displayItems.map((item, index) => {
            return (
              <CarouselItem 
              item={item}
              isActive={currentActiveIndex === index }
              key={index}
              moveDirection={moveDirection}
              moveLength={moveLength}
              />
            )
          })
        }
      </div>
      <div className="LeftArrow">
          <Arrow 
            direction="Left" 
            onClick={
              () => {
                setCurActiveIndex(currentActiveIndex-1);
                setMoveDirection("Right")
                setMoveLength(moveLength+100)
              }}
            visible={currentActiveIndex >= 1}
            >  
          </Arrow>
        </div>
      <div className="RightArrow">
        <Arrow 
          direction="Right"
          onClick={
            () => {
            setCurActiveIndex(currentActiveIndex+1);
            setMoveDirection("Left")
            setMoveLength(moveLength - 100)
            }}
          visible={currentActiveIndex < displayItems.length-1}
          >
        </Arrow>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
