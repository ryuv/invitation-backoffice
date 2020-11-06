import React, { Component } from 'react'
import { Formik } from "formik"
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
          galleryPhoto:null,
          husbandPhoto:null,
          wifePhoto:null
        }} 
          onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log(data);

          const formData = new FormData();
          formData.append('mainPhoto',data.mainPhoto);
          formData.append('galleryPhoto',data.galleryPhoto);
          formData.append('husbandPhoto',data.husbandPhoto);
          formData.append('wifePhoto',data.wifePhoto);

          // this.register(formData)
          const config = {
            headers: {
                'content-type': 'multipart/form-data'
              }
          };
          // axios.post("http://www.cryucodes.design:9091/api/upload",formData,config)
          //     .then((res) => {
          //       console.log(res);
          //     }).catch((error) => {
          // });

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
            data.weddingHow
          }&weddingAddress=${
            data.weddingAddress
          }&invatationContent=${
            data.invatationContent
          }&kakaoTitle=${
            data.kakaoTitle
          }&kakaoContent=${
            data.kakaoContent
          }&mainPhoto=${
            data.mainPhoto.name
          }&husbandPhoto=${
            data.husbandPhoto.name
          }&wifePhoto=${
            data.wifePhoto.name
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
                  <input name="weddingHow" value={values.weddingHow} onChange={handleChange}/>
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
                  <input name="invatationContent" value={values.invatationContent} onChange={handleChange}/>
                </div>

                <div>
                  <h3>카톡 메인 타이틀</h3>
                  <input name="kakaoTitle" value={values.kakaoTitle} onChange={handleChange}/>
                </div>

                <div>
                  <h3>상세 내용 2줄</h3>
                  <input name="kakaoContent" value={values.kakaoContent} onChange={handleChange}/>
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
                  <h3>갤러리 사진 1~10</h3>
                  <input type="file" multiple
                  name="galleryPhoto"   
                  onChange={(event) =>{
                    setFieldValue("galleryPhoto", event.currentTarget.files);
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
