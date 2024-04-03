import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";
import { FcApproval } from "react-icons/fc";
const HeadQuarter = () => {
    return <BaseLayout>
        <div className="container">

            <div className="container">

                <div className="our-value-system mt-5">
                    <div className="row">
                        <div className="col-md-12  ">
                            <h2 className="values-system-heading d-flex">Official Contacts <FcApproval className="ms-3" /></h2>



                            <p className="values-system-para mt-2">
                                Secretariat Provincial Ombudsman , Sindh
                            </p>
                            <p className="values-system-para mt-2">
                                Shahrah-e-Kamal Ataturk Ombudsman , Sindh Karachi
                            </p>
                            <p className="values-system-para mt-2">
                                Contact : 021-99211025
                            </p>
                            <p className="values-system-para mt-2">

                                PABX # : 99211025, 99211028, 99211031 (Ext: 200)
                            </p>
                            <p className="values-system-para  mt-3">
                                <a className="underline text-success"
                                    href="https://www.mohtasibsindh.gov.pk/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Website :   http://www.mohtasibsindh.gov.pk</a>
                            </p>
                            <p className="values-system-para mt-2  text-success">
                                <a href="mailto:mohtasibhd@yahoo.com" className="underline">                                    Email : mohtasibhd@yahoo.com</a>
                            </p>





                        </div>
                    </div>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-xs-6">Name</th>
                            <th className="col-xs-3">Designation</th>
                            <th className="col-xs-3">Telephone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD SOHAIL RAJPUT </td>
                            <td className="col-xs-3">HON’BLE OMBUDSMAN	</td>
                            <td className="col-xs-3">99211026</td>
                    
                        </tr>
                        <tr>
                            <td className="col-xs-6">SYED MANSOOR ABBAS RIZVI	</td>
                            <td className="col-xs-3">SECRETARY</td>
                            <td className="col-xs-3">99211021</td>
                       
                        </tr>
                        <tr>
                            <td className="col-xs-6"></td>
                            <td className="col-xs-3">DIRECTOR GENERAL- II</td>
                            <td className="col-xs-3">-</td>
                         
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. AKHTAR HUSSAIN BUGTI</td>
                            <td className="col-xs-3">DIRECTOR GENERAL- I</td>
                            <td className="col-xs-3">99211020</td>
                        
                        </tr>
                        
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD MISBAH TUINO		</td>
                            <td className="col-xs-3">ADVISOR - J</td>
                            <td className="col-xs-3">99211033	</td>
                           
                        </tr>
                        {/* <tr>
                            <td className="col-xs-6">MS.PASHMINA HASSAN
                            </td>
                            <td className="col-xs-3">FELLOW (ACCOUNTS)</td>
                            <td className="col-xs-3">99217535</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0301-3560508</td>
                            <td className="col-xs-3">209</td>
                        </tr> */}
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD NASEER JAMALI</td>
                            <td className="col-xs-3">ADVISOR - N</td>
                            <td className="col-xs-3">99211050</td>
                     
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. GHULAM ABID SHAIKH</td>
                            <td className="col-xs-3">	ADVISOR - K</td>
                            <td className="col-xs-3">99211032</td>
               
                        </tr>
                        <tr>
                            <td className="col-xs-6">CAPT.(R) SYED HASHIM RAZA ZAIDI</td>
                            <td className="col-xs-3">	ADVISOR - S</td>
                            <td className="col-xs-3">99211035</td>
               
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MIR HUSSAIN ALI</td>
                            <td className="col-xs-3">	ADVISOR - M</td>
                            <td className="col-xs-3">99211054</td>
               
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MANZOOR ALI AWAN	</td>
                            <td className="col-xs-3">CONSULTANT - F	</td>
                            <td className="col-xs-3">99211057	</td>
                    
                        </tr>
                        <tr>
                            <td className="col-xs-6">MS. REHANA G. ALI MEMON 	</td>
                            <td className="col-xs-3">ADVISOR-H	</td>
                            <td className="col-xs-3">99211053	</td>
                   
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. FASIHUDDIN KHAN 	</td>
                            <td className="col-xs-3">ADVISOR-Z </td>
                            <td className="col-xs-3">99211207</td>
                    
                        </tr>
                        <tr>
                            <td className="col-xs-6">DR.MUHAMMAD NAWAZ SHAIKH 	</td>
                            <td className="col-xs-3">ADVISOR-I </td>
                            <td className="col-xs-3">99211030</td>
                    
                        </tr>
                        <tr>
                            <td className="col-xs-6">BRIG. (RTD) MUHAMMAD JAMIL</td>
                            <td className="col-xs-3">CONSULTANT - G	</td>
                            <td className="col-xs-3">99204017	</td>
                         
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD AKMAL NASEEM</td>
                            <td className="col-xs-3">CONSULTANT (IT/MEDIA)	</td>
                            <td className="col-xs-3">-</td>
                    
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. RAFIUZZAMAN SIDDIQUI</td>
                            <td className="col-xs-3">ADVISOR B	</td>
                            <td className="col-xs-3">99211208</td>
                
                        </tr>
        
                        <tr>
                            <td className="col-xs-6">MR. SHAHID AHMED HASHMI
                            </td>
                            <td className="col-xs-3">CONSULTANT (LEGAL)
                            </td>
                            <td className="col-xs-3">99211027	</td>
                 
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. AFZAL AHMED	</td>
                            <td className="col-xs-3">DIRECTOR (FINANCE)	</td>
                            <td className="col-xs-3">99217510</td>
                  
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. NAEEM UDDIN</td>
                            <td className="col-xs-3">P.R SECRETARY TO SECRETARY		</td>
                            <td className="col-xs-3">99211023</td>
                        
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MOHAMMAD ABDULLAH SIDDIQUI</td>
                            <td className="col-xs-3">P.S TO OMBUDSMAN		</td>
                            <td className="col-xs-3">99211026</td>
                
                        </tr>

                        <tr>
                            <td className="col-xs-6">MR. MOHAMMAD MUNAWAR SHAH	</td>
                            <td className="col-xs-3">A.R/D.D.O		</td>
                            <td className="col-xs-3">99211211	</td>
                  
                        </tr>
                       
                        <tr>
                            <td className="col-xs-6">MR. OZAIR AHMED SIDDIQUI	</td>
                            <td className="col-xs-3">DEPUTY DIRECTOR(ADMN)	</td>
                            <td className="col-xs-3">99211714	</td>
                        
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD ZAFAR</td>
                            <td className="col-xs-3">DEPUTY DIRECTOR(CCO)	</td>
                            <td className="col-xs-3">99211052</td>
                   
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MASOOD ISHRAT	</td>
                            <td className="col-xs-3">REGISTRAR	</td>
                            <td className="col-xs-3">99211024</td>
          
                        </tr>

                        <tr>
                            <td className="col-xs-6">SYED IFTIKHAR HUSSAIN</td>
                            <td className="col-xs-3">STAFF OFFICER		</td>
                            <td className="col-xs-3">-	</td>
                  
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. ASAD ABBAS	</td>
                            <td className="col-xs-3">SUPERINTENDENT (Store)</td>
                            <td className="col-xs-3"> 99217385</td>
              
                        </tr>
               
                   

                        <tr>
                            <td className="col-xs-6">MS. TAYYABA AASIM	</td>
                            <td className="col-xs-3">SUPERINTENDENT</td>
                            <td className="col-xs-3">99211026	</td>
                      
                        </tr>


                        <tr>
                            <td className="col-xs-6">MR. FARHAT MEHMOOD </td>
                            <td className="col-xs-3">ASSISTANT REGISTRAR</td>
                            <td className="col-xs-3">-</td>
               
                        </tr>

                        <tr>
                            <td className="col-xs-6">MR. ABDUL WAHID KHAN</td>
                            <td className="col-xs-3">ASSISTANT DIRECTOR/SUPERINTENDENT (ADMN)</td>
                            <td className="col-xs-3">99211220</td>
                      
                        </tr>
                        <tr>
                            <td className="col-xs-6">MS. PASHMINA HASSAN</td>
                            <td className="col-xs-3">FELLOW (ACCOUNTS)</td>
                            <td className="col-xs-3">-</td>
                        
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR.WASEEM RAZA	</td>
                            <td className="col-xs-3">SUPERINTENDENT		</td>
                            <td className="col-xs-3">99211700</td>
                     
                        </tr>
                        <tr>
                            <td className="col-xs-6">CTC SECTION</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">99211022</td>
                   
                        </tr>

                        <tr>
                            <td className="col-xs-6">LIBRARY</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                       
                        </tr>

                      
                        <tr>
                            <td className="col-xs-6">COMPLAINT SECTION</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">99211086</td>
                        
                        </tr>

                        <tr>
                            <td className="col-xs-6">ADMINISTRATION SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                       
                        </tr>
                        <tr>
                            <td className="col-xs-6">ACCOUNTS SECTION </td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">99211713</td>
                           
                        </tr>

                        <tr>
                            <td className="col-xs-6">STORE SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                       
                        </tr>

                        <tr>
                            <td className="col-xs-6">COMPUTER SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                 
                        </tr>

                        <tr>
                            <td className="col-xs-6">PHOTOSTAT SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                    
                        </tr>

                        <tr>
                            <td className="col-xs-6">RECORD ROOM</td>
                            <td className="col-xs-3">-	</td>
                            <td className="col-xs-3">-</td>
                    
                        </tr>

                        <tr>
                            <td className="col-xs-6">R & I SECTION</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">-</td>
                     
                        </tr>

                        <tr>
                            <td className="col-xs-6">RECEPTION (MISS. ZAHIDA) </td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">-</td>
                  
                        </tr>

                        <tr>
                            <td className="col-xs-6">GUARD ROOM</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                     
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF SECRETARY</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                      
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF DG-I</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                       
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF DG-II</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                  
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF CONSULTANT-F	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                 
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-J	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                     
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-K	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                 
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-B	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
             
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF FELLOW (ACCOUNTS) 	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                    
                        </tr>
                        
                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-Z	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                     
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF CONSULTANT (LEGAL)</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                       
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-I	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                       
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-N	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                    
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF CONSULTANT- H 	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                  
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF REGISTRAR</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                     
                        </tr>
    
                        <tr>
                            <td className="col-xs-6">DRIVER ROOM	</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">-</td>
                      
                        </tr>
                    </tbody>

                </table>

            </div>

        </div>


    </BaseLayout>;
};

export default HeadQuarter;