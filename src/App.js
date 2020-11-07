import React, { Component } from 'react'
import { Formik,Field } from "formik"
import axios from 'axios'

export default class App extends Component {

  // register = (regiInfo) => {

  //   axios({
  //     method: 'get',
  //     url: 'http://www.cryucodes.design:9091/api/add',
  //     data: regiInfo,
  //     headers: {'Content-Type': 'multipart/form-data' }
  //     })
  //     .then(function (response) {
  //         //handle success
  //         console.log(response);
  //     })
  //     .catch(function (response) {
  //         //handle error
  //         console.log(response);
  //     });
  
  // }

  htmlTag(str){
    if(str !== ""){
      return str.replaceAll("<", "%26lt;")
      .replaceAll(">", "%26gt;")
      .replaceAll("/", "%26%2347;");
    }
  }


  render() {
    return (
      <>
        <Formik initialValues={{ 
          husbandName: "", 
          husbandPhone: "", 
          husbandInsta:"", 
          husbandFacebook:"", 
          husbandKakaoPay:"" ,
          husbandMama: "",
          husbandPapa: "",
          wifeName: "", 
          wifePhone: "", 
          wifeInsta:"", 
          wifeFacebook:"", 
          wifeKakaoPay:"" ,
          wifeMama: "",
          wifePapa: "",
          weddingDate: "",
          weddingLocation: "",
          weddingNumber: "",
          weddingHow: "",
          weddingAddress: "",
          invatationContent:"",
          kakaoTitle: "",
          kakaoContent:"",
          mainPhoto:null,
          husbandPhoto:null,
          wifePhoto:null,
          galleryPhoto_1:null,
          galleryPhoto_2:null,
          galleryPhoto_3:null,
          galleryPhoto_4:null,
          galleryPhoto_5:null,
          galleryPhoto_6:null,
          galleryPhoto_7:null,
          galleryPhoto_8:null,
          galleryPhoto_9:null,
          galleryPhoto_10:null,

        }} 
          onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log( this.htmlTag(data.weddingHow));

          const formData = new FormData();
          formData.append('mainPhoto',data.mainPhoto);
          formData.append('husbandPhoto',data.husbandPhoto);
          formData.append('wifePhoto',data.wifePhoto);
          formData.append('galleryPhoto_1',data.galleryPhoto_1);
          formData.append('galleryPhoto_2',data.galleryPhoto_2);
          formData.append('galleryPhoto_3',data.galleryPhoto_3);
          formData.append('galleryPhoto_4',data.galleryPhoto_4);
          formData.append('galleryPhoto_5',data.galleryPhoto_5);
          formData.append('galleryPhoto_6',data.galleryPhoto_6);
          formData.append('galleryPhoto_7',data.galleryPhoto_7);
          formData.append('galleryPhoto_8',data.galleryPhoto_8);
          formData.append('galleryPhoto_9',data.galleryPhoto_9);
          formData.append('galleryPhoto_10',data.galleryPhoto_10);


          // this.register(formData)
          const config = {
            headers: {
                'content-type': 'multipart/form-data'
              }
          };
          axios.post("http://www.cryucodes.design:9091/api/upload",formData,config)
          .then((res) => {
            console.log(res);
          }).catch((error) => {});

          axios.get(`http://www.cryucodes.design:9091/api/add?husbandName=${
            data.husbandName
          }&husbandPhone=${
            data.husbandPhone
          }&husbandInsta=${
            data.husbandInsta
          }&husbandFacebook=${
            data.husbandFacebook
          }&husbandKakaoPay=${
            data.husbandKakaoPay
          }&husbandMama=${
            data.husbandMama
          }&husbandPapa=${
            data.husbandPapa
          }&wifeName=${
            data.wifeName
          }&wifePhone=${
            data.wifePhone
          }&wifeInsta=${
            data.wifeInsta
          }&wifeFacebook=${
            data.wifeFacebook
          }&wifeKakaoPay=${
            data.wifeKakaoPay
          }&wifeMama=${
            data.wifeMama
          }&wifePapa=${
            data.wifePapa
          }&weddingDate=${
            data.weddingDate
          }&weddingLocation=${
            data.weddingLocation
          }&weddingNumber=${
            data.weddingNumber
          }&weddingHow=${
            this.htmlTag(data.weddingHow)
          }&weddingAddress=${
            data.weddingAddress
          }&invatationContent=${
            this.htmlTag(data.invatationContent)
          }&kakaoTitle=${
            data.kakaoTitle
          }&kakaoContent=${
            data.kakaoContent
          }&mainPhoto=${
            data.mainPhoto != null?
              data.mainPhoto.name:""
          }&husbandPhoto=${
            data.husbandPhoto != null?
              data.husbandPhoto.name:""
          }&wifePhoto=${
            data.wifePhoto != null?
              data.wifePhoto.name:""
          }&galleryPhoto_1=${
            data.galleryPhoto_1 != null?
              data.galleryPhoto_1.name:""
          }&galleryPhoto_2=${
            data.galleryPhoto_2 != null?
              data.galleryPhoto_2.name:""
          }&galleryPhoto_3=${
            data.galleryPhoto_3 != null?
              data.galleryPhoto_3.name:""
          }&galleryPhoto_4=${
            data.galleryPhoto_4 != null?
              data.galleryPhoto_4.name:""
          }&galleryPhoto_5=${
            data.galleryPhoto_5 != null?
              data.galleryPhoto_5.name:""
          }&galleryPhoto_6=${
            data.galleryPhoto_6 != null?
              data.galleryPhoto_6.name:""
          }&galleryPhoto_7=${
            data.galleryPhoto_7 != null?
              data.galleryPhoto_7.name:""
          }&galleryPhoto_8=${
            data.galleryPhoto_8 != null?
              data.galleryPhoto_8.name:""
          }&galleryPhoto_9=${
            data.galleryPhoto_9 != null?
              data.galleryPhoto_9.name:""
          }&galleryPhoto_10=${
            data.galleryPhoto_10 != null?
              data.galleryPhoto_10.name:""
          }
          `)
          .then(res=>{console.log(res)});


          setSubmitting(false);
        }}>
          {
            ({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <h3>신랑 성함</h3>
                  <input name="husbandName" value={values.husbandName} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신랑 전화번호 (- 없이)</h3>
                  <input name="husbandPhone" value={values.husbandPhone} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신랑 인스타</h3>
                  <input name="husbandInsta" value={values.husbandInsta} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신랑 페북</h3>
                  <input name="husbandFacebook" value={values.husbandFacebook} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신랑 카카오페이</h3>
                  <input name="husbandKakaoPay" value={values.husbandKakaoPay} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신랑 프로필사진</h3>
                  <input type="file" name="husbandPhoto"   
                    onChange={(event) =>{
                      setFieldValue("husbandPhoto", event.currentTarget.files[0]);
                    }}/>
                </div>
                <div>
                  <h3>신랑 엄마 이름(성 빼고)</h3>
                  <input name="husbandMama" value={values.husbandMama} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신랑 아빠 이름(성 빼고)</h3>
                  <input name="husbandPapa" value={values.husbandPapa} onChange={handleChange}/>
                </div>

                <div>
                  <h3>신부 성함</h3>
                  <input name="wifeName" value={values.wifeName} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신부 전화번호 (- 넣어서)</h3>
                  <input name="wifePhone" value={values.wifePhone} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신부 인스타</h3>
                  <input name="wifeInsta" value={values.wifeInsta} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신부 페북</h3>
                  <input name="wifeFacebook" value={values.wifeFacebook} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신부 카카오페이</h3>
                  <input name="wifeKakaoPay" value={values.wifeKakaoPay} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신부 프로필사진</h3>
                  <input type="file" name="wifePhoto"   
                    onChange={(event) =>{
                      setFieldValue("wifePhoto", event.currentTarget.files[0]);
                    }}/>
                </div>
                <div>
                  <h3>신부 엄마 이름(성 빼고)</h3>
                  <input name="wifeMama" value={values.wifeMama} onChange={handleChange}/>
                </div>
                <div>
                  <h3>신부 아빠 이름(성 빼고)</h3>
                  <input name="wifePapa" value={values.wifePapa} onChange={handleChange}/>
                </div>
                

                <div>
                  <h3>결혼식 날짜 (2020-03-10 20:00:00))</h3>
                  <input name="weddingDate" value={values.weddingDate} onChange={handleChange}/>
                </div>
                <div>
                  <h3>결혼식장 장소</h3>
                  <input name="weddingLocation" value={values.weddingLocation} onChange={handleChange}/>
                </div>
                <div>
                  <h3>결혼식장 가는 방법</h3>
                  <Field
                    name="weddingHow"
                    component="textarea"
                    rows="10"
                  />
                </div>
                
                <div>
                  <h3>결혼식장 주소</h3>
                  <input name="weddingAddress" value={values.weddingAddress} onChange={handleChange}/>
                </div>
                <div>
                  <h3>결혼식장 번호</h3>
                  <input name="weddingNumber" value={values.weddingNumber} onChange={handleChange}/>
                </div>

                <div>
                  <h3>청첩장 내용</h3>
                  <Field
                    name="invatationContent"
                    component="textarea"
                    rows="10"
                  />
                </div>

                <div>
                  <h3>카톡 메인 타이틀</h3>
                  <input name="kakaoTitle" value={values.kakaoTitle} onChange={handleChange}/>
                </div>

                <div>
                  <h3>상세 내용 2줄</h3>
                  <Field
                    name="kakaoContent"
                    component="textarea"
                    rows="10"
                  />
                </div>

                {/* <div>
                  <h3>카톡 메인 사진</h3>
                  <input />
                </div> */}

                <div>
                  <h3>메인 사진</h3>
                  <input 
                    type="file" 
                    name="mainPhoto"   
                    onChange={(event) =>{
                      setFieldValue("mainPhoto", event.currentTarget.files[0]);
                    }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 1</h3>
                  <input type="file"
                  name="galleryPhoto_1"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_1", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 2</h3>
                  <input type="file"
                  name="galleryPhoto_2"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_2", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 3</h3>
                  <input type="file"
                  name="galleryPhoto_3"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_3", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 4</h3>
                  <input type="file"
                  name="galleryPhoto_4"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_4", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 5</h3>
                  <input type="file"
                  name="galleryPhoto_5"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_5", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 6</h3>
                  <input type="file"
                  name="galleryPhoto_6"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_6", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 7</h3>
                  <input type="file"
                  name="galleryPhoto_7"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_7", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 8</h3>
                  <input type="file"
                  name="galleryPhoto_8"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_8", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 9</h3>
                  <input type="file"
                  name="galleryPhoto_9"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_9", event.currentTarget.files[0]);
                  }}
                  />
                </div>

                <div>
                  <h3>갤러리 사진 10</h3>
                  <input type="file"
                  name="galleryPhoto_10"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto_10", event.currentTarget.files[0]);
                  }}
                  />
                </div>
                

              </div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
              </form>
            )
          }
        </Formik>
      </>
    )
  }
}
