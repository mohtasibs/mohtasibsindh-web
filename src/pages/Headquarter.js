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
                            <th className="col-xs-3">Residence Number</th>
                            <th className="col-xs-3">Cell number</th>
                            <th className="col-xs-3">Intercom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-xs-6">MR. AJAZ ALI KHAN
                                PAS</td>
                            <td className="col-xs-3">HON’BLE OMBUDSMAN	</td>
                            <td className="col-xs-3">99211026</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">201</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">SYED MANSOOR ABBAS RIZVI	</td>
                            <td className="col-xs-3">SECRETARY</td>
                            <td className="col-xs-3">99211021</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">203</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6"></td>
                            <td className="col-xs-3">DIRECTOR GENERAL- II</td>
                            <td className="col-xs-3">99211054</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">204</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. AKHTAR HUSSAIN BUGTI</td>
                            <td className="col-xs-3">DIRECTOR GENERAL- I</td>
                            <td className="col-xs-3">99211020</td>
                            <td className="col-xs-3">0300-2503032</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">208</td>
                        </tr>
                        
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD ZAKIR		</td>
                            <td className="col-xs-3">ADVISOR - J</td>
                            <td className="col-xs-3">99211033	</td>
                            <td className="col-xs-3">35341008-9</td>
                            <td className="col-xs-3">0333-7809788</td>
                            <td className="col-xs-3">212</td>
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
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0300-2671622</td>
                            <td className="col-xs-3">206</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. GHULAM ABID SHAIKH</td>
                            <td className="col-xs-3">	ADVISOR - K</td>
                            <td className="col-xs-3">99211032</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0300-2811593</td>
                            <td className="col-xs-3">214</td>
                        </tr>
                    
                        <tr>
                            <td className="col-xs-6">MR. MANZOOR ALI AWAN	</td>
                            <td className="col-xs-3">CONSULTANT - F	</td>
                            <td className="col-xs-3">99211057	</td>
                            <td className="col-xs-3">99204379</td>
                            <td className="col-xs-3">0300-2171404</td>
                            <td className="col-xs-3">207</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MS. REHANA G. ALI MEMON 	</td>
                            <td className="col-xs-3">ADVISOR-H	</td>
                            <td className="col-xs-3">99211053	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0333-2268327</td>
                            <td className="col-xs-3">213</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. FASIHUDDIN KHAN 	</td>
                            <td className="col-xs-3">ADVISOR-Z </td>
                            <td className="col-xs-3">99211207</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0333-2301479</td>
                            <td className="col-xs-3">263</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">DR.MUHAMMAD NAWAZ SHAIKH 	</td>
                            <td className="col-xs-3">ADVISOR-I </td>
                            <td className="col-xs-3">99211030</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0300-2195028</td>
                            <td className="col-xs-3">211</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">BRIG. (RTD) MUHAMMAD JAMIL</td>
                            <td className="col-xs-3">CONSULTANT - G	</td>
                            <td className="col-xs-3">99204017	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0333-8903355</td>
                            <td className="col-xs-3">-</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD AKMAL NASEEM</td>
                            <td className="col-xs-3">CONSULTANT (IT/MEDIA)	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0300-9214391</td>
                            <td className="col-xs-3">-</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. RAFIUZZAMAN SIDDIQUI</td>
                            <td className="col-xs-3">ADVISOR B	</td>
                            <td className="col-xs-3">99211208</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3"> 0327-2301836</td>
                            <td className="col-xs-3">205</td>
                        </tr>
        
                        <tr>
                            <td className="col-xs-6">MR. SHAHID AHMED HASHMI
                            </td>
                            <td className="col-xs-3">CONSULTANT (LEGAL)
                            </td>
                            <td className="col-xs-3">99211027	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0333-2316160</td>
                            <td className="col-xs-3">202</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. AFZAL AHMED	</td>
                            <td className="col-xs-3">DIRECTOR (FINANCE)	</td>
                            <td className="col-xs-3">99217510</td>
                            <td className="col-xs-3">34612800</td>
                            <td className="col-xs-3">0313-2566635</td>
                            <td className="col-xs-3">229</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. NAEEM UDDIN</td>
                            <td className="col-xs-3">P.R SECRETARY TO SECRETARY		</td>
                            <td className="col-xs-3">99211023</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0300-2152243</td>
                            <td className="col-xs-3">243</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MOHAMMAD ABDULLAH SIDDIQUI</td>
                            <td className="col-xs-3">P.S TO OMBUDSMAN		</td>
                            <td className="col-xs-3">99211026</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0333-3230714</td>
                            <td className="col-xs-3">252</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">MR. MOHAMMAD MUNAWAR SHAH	</td>
                            <td className="col-xs-3">A.R/D.D.O		</td>
                            <td className="col-xs-3">99211211	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0300-3756136</td>
                            <td className="col-xs-3">220</td>
                        </tr>
                       
                        <tr>
                            <td className="col-xs-6">MR. OZAIR AHMED SIDDIQUI	</td>
                            <td className="col-xs-3">DEPUTY DIRECTOR(ADMN)	</td>
                            <td className="col-xs-3">99211714	</td>
                            <td className="col-xs-3">34974447</td>
                            <td className="col-xs-3">0300-2317903</td>
                            <td className="col-xs-3">225</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MUHAMMAD ZAFAR</td>
                            <td className="col-xs-3">DEPUTY DIRECTOR(CCO)	</td>
                            <td className="col-xs-3">99211052</td>
                            <td className="col-xs-3">35034119</td>
                            <td className="col-xs-3">0336-2271636</td>
                            <td className="col-xs-3">215</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. MASOOD ISHRAT	</td>
                            <td className="col-xs-3">REGISTRAR	</td>
                            <td className="col-xs-3">99211024</td>
                            <td className="col-xs-3">34574593</td>
                            <td className="col-xs-3">0333-2118987</td>
                            <td className="col-xs-3">221</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">SYED IFTIKHAR HUSSAIN</td>
                            <td className="col-xs-3">STAFF OFFICER		</td>
                            <td className="col-xs-3">99211026	</td>
                            <td className="col-xs-3">34110625</td>
                            <td className="col-xs-3">0300-2725590</td>
                            <td className="col-xs-3">250</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR. ASAD ABBAS	</td>
                            <td className="col-xs-3">SUPERINTENDENT (Store)</td>
                            <td className="col-xs-3"> 99217385</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">226</td>
                        </tr>
               
                   

                        <tr>
                            <td className="col-xs-6">MS. TAYYABA AASIM	</td>
                            <td className="col-xs-3">SUPERINTENDENT</td>
                            <td className="col-xs-3">99211026	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">217</td>
                        </tr>


                        <tr>
                            <td className="col-xs-6">MR. FARHAT MEHMOOD </td>
                            <td className="col-xs-3">ASSISTANT REGISTRAR</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0300-2851046</td>
                            <td className="col-xs-3">227</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">MR. ABDUL WAHID KHAN</td>
                            <td className="col-xs-3">ASSISTANT DIRECTOR/SUPERINTENDENT (ADMN)</td>
                            <td className="col-xs-3">99211220</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0333-2076176</td>
                            <td className="col-xs-3">228</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MS. PASHMINA HASSAN</td>
                            <td className="col-xs-3">FELLOW (ACCOUNTS)</td>
                            <td className="col-xs-3">99217535</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0301-3560508</td>
                            <td className="col-xs-3">209</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">MR.WASEEM RAZA	</td>
                            <td className="col-xs-3">SUPERINTENDENT		</td>
                            <td className="col-xs-3">99211700</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">0334-3348966</td>
                            <td className="col-xs-3">216</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">CTC SECTION</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">99211022</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">254</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">LIBRARY</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">99211022</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">223</td>
                        </tr>

                      
                        <tr>
                            <td className="col-xs-6">COMPLAINT SECTION</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">99211086</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">227</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">ADMINISTRATION SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3"></td>
                            <td className="col-xs-3">222</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">ACCOUNTS SECTION </td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">99211713</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">238</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STORE SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3"></td>
                            <td className="col-xs-3">210</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">COMPUTER SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3"></td>
                            <td className="col-xs-3">230</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">PHOTOSTAT SECTION</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">231</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">RECORD ROOM</td>
                            <td className="col-xs-3">-	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">232</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">R & I SECTION</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">233</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">RECEPTION (MISS. ZAHIDA) </td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">234</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">GUARD ROOM</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">235</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF SECRETARY</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">218</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF DG-I</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">236</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF DG-II</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">239</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF CONSULTANT-F	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">240</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-J	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">241</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-K	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">247</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-B	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">258/248</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF FELLOW (ACCOUNTS) 	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">242</td>
                        </tr>
                        
                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-Z	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">258</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF CONSULTANT (LEGAL)</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3"></td>
                            <td className="col-xs-3">259</td>
                        </tr>

                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-I	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">244</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF ADVISOR-N	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">245</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF CONSULTANT- H 	</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">246</td>
                        </tr>
                        <tr>
                            <td className="col-xs-6">STAFF OF REGISTRAR</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">253/264</td>
                        </tr>
    
                        <tr>
                            <td className="col-xs-6">DRIVER ROOM	</td>
                            <td className="col-xs-3">	-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">-</td>
                            <td className="col-xs-3">260</td>
                        </tr>
                    </tbody>

                </table>

            </div>

        </div>


    </BaseLayout>;
};

export default HeadQuarter;