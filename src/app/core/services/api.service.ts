import { PersonalInformation, Address, Disability, Emergency, Representative, TypeConcurrence, BehavioralStudent, Attendance, TypeBehavioral, AnioLectivo, ReportBehaviorStudent, ReportConcurrenceStudent, ReportActivity, ListStudentNotification, UserPersonalInfo, UserAddress, UserEmergency, UserPaidMetod } from './../models/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { MENU } from '../../layouts/sidebar/menu';
import { ClaseEditable, MaterialIvi } from 'src/app/core/models/interfaces';
import { SesionStorageService } from './sesion-storage.service';
import { AuthService } from './auth.service';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  toogle: boolean;

  constructor(
    private http: HttpClient,
    private storage: SesionStorageService,
    private auth: AuthService
  ) {
    this.toogle = (this.storage.getDataStorage('toogle') === 'true');
  }


  setToogle() {
    this.toogle = !this.toogle
    this.storage.setStorage('toogle', this.toogle.toString());
  }

  // CLASES
  getClassroomById() {
    const URL = environment.urlApi + 'R03/H12A/' + 3;
    return this.http.get(URL)
  }
  getClassroomsStatus() {
    const URL = environment.urlApi + 'R03/H12F1';
    return this.http.get(URL)
  }
  getStatesStatus() {
    const URL = environment.urlApi + 'R03/H12F2';
    return this.http.get(URL)
  }
  getCoursesStatus() {
    const URL = environment.urlApi + 'R03/H12F3/' + this.auth.currentUser.id;
    return this.http.get(URL)
  }
  getParcials(): Observable<any> {
    const URL = environment.urlApi + 'R06/H40/' + this.auth.currentUser.id;
    return this.http.get<any>(URL)
  }
  studenRandom(id: any) {
    const URL = environment.urlApi + 'R06/H46/' + id;
    return this.http.get(URL)
  }
  getQuimestreByClass(maestra: number, id: number) {
    const URL = environment.urlApi + 'R06/H42/' + maestra + '/' + id;
    return this.http.get(URL)
  }
  getSectionQuimestre(maestra: number, parcial: number, activity: number) {
    const URL = environment.urlApi + 'R06/H58/' + maestra + '/' + parcial + '/' + activity;
    return this.http.get(URL)
  }

  //  Name: getClassDetails
  //  Description: Realiza una petición GET hacia la api para Clases de IVI
  //  Date: 25/10/2021
  //  Author: Javier Q.

  getClassDetails(classID: string): Observable<any> {
    const URL = environment.urlApi + 'R03/H16/' + classID;
    return this.http.get<any>(URL);
  }

  //  Name: getOrderDetails
  //  Description: Realiza una petición GET hacia una api de prueba 
  //  Date: 25/10/2021
  //  Author: Javier Q.
  getOrderDetails(): Observable<any> {
    const URL = '' + 'orders';
    return this.http.get<any>(URL);
  }

  //  Name: putClass
  //  Description: Realiza una petición POST hacia una LA api
  //   Args: clase -> Objeto con los datos de la clase
  //  Date: 29/10/2021
  //  Author: Javier Q.
  putClass(clase: ClaseEditable): Observable<any> {
    const URL = environment.urlApi + 'R03/InsertH14/';
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(clase);
    return this.http.post(URL, body, { 'headers': headers })
  }
  //  Name: getPartialInfoByUserID
  //  Description: Realiza una petición GET para obtener el registro parcial de acuerdo al maestro y el  identificador de parcial 
  //   Args: userID -> ID maestro ,  partial -> id de parcial
  //  Date: 24/11/2021
  //  Author: Javier Q.
  getPartialInfoByUserID(userID: string, partial: string): Observable<any> {
    const URL = environment.urlApi + 'R06/H41/' + userID + "/" + partial;
    
    return this.http.get<any>(URL);
  }
  //  Name: getFinalRegister
  //  Description: Realiza una petición GET para obtener el registro final de acuerdo al maestro 
  //   Args: userID -> ID maestro 
  //  Date: 24/11/2021
  //  Author: Javier Q.
  getFinalRegister(userID: string): Observable<any> {
    const URL = environment.urlApi + 'R06/H43/' + userID;
    return this.http.get<any>(URL);
  }

  //  Name: getTaskDetails
  //  Description: Realiza una petición GET para obtener los detalles de la actividad 
  //   Args: taskID -> ID actividad 
  //  Date: 02/12/2021
  //  Author: Javier Q.
  getTaskDetails(taskID: string): Observable<any> {
    const URL = environment.urlApi + 'R06/H59/' + taskID;
    return this.http.get<any>(URL);
  }

  //  Name: cloneActivity
  //  Description: Realiza una petición POST para agregar una actividad a nuestro repositorio (clonar)
  //   Args: data -> Informacion de la actividad 
  //  Date: 02/12/2021
  //  Author: Javier Q.
  cloneActivity(data: any) {
    const URL = environment.urlApi + 'R06/H51CloneActivity';
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    return this.http.post(URL, body, { 'headers': headers })
  }

  //  Name: getPendingTasks
  //  Description: Realiza una petición GET para obtener las clases con calificaciones pendientes
  //  Date: 10/12/2021
  //  Author: Javier Q.
  getPendingTasks() {
    const URL = environment.urlApi + 'R02/H05/' + this.auth.currentUser.id;
    return this.http.get<any>(URL);
  }
  //  Name: getUncompletedClasses
  //  Description: Realiza una petición GET para obtener las clases con estados negativos (agrupadas)
  //  Date: 10/12/2021
  //  Author: Javier Q.
  getUncompletedClasses() {
    const URL = environment.urlApi + 'R02/H06/' + this.auth.currentUser.id;
    return this.http.get<any>(URL);
  }
  //  Name: getPendingClasses
  //  Description: Realiza una petición GET para obtener las clases con estados negativos (sin agrupar)
  //  Date: 15/12/2021
  //  Author: Javier Q.
  getPendingClasses() {
    const URL = environment.urlApi + 'R02/H06_2/' + this.auth.currentUser.id;
    return this.http.get<any>(URL);
  }

  getAlerts() {
    const URL = environment.urlApi + 'R00/H86/2' ;
    return this.http.get<any>(URL);
  }


  //  Name: getPendingClasses
  //  Description: Realiza una petición GET para obtener las clases con estados negativos (sin agrupar)
  //  Date: 20/12/2021
  //  Author: Javier Q.
  getGradesConfig() {
    const URL = environment.urlApi + 'R06/ConfigNotas'
    return this.http.get<any>(URL);
  }

  //  Name: getPCAData
  //  Description: Realiza una petición GET para obtener los datos informativos (Seccion 1) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCAData(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaPudS1/' + PCA_ID;
    return this.http.get<any>(URL);
  }

  //  Name: getPCATime
  //  Description: Realiza una petición GET para obtener los datos de tiempo (Seccion 2) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCATime(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaPudS2/' + PCA_ID;
    return this.http.get<any>(URL);

  }
  //  Name: getPCAGoals
  //  Description: Realiza una petición GET para obtener los datos de objetivos (Seccion 3) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCAGoals(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaS3/' + PCA_ID;
    return this.http.get<any>(URL);

  }
  //  Name: getPCAAxis
  //  Description: Realiza una petición GET para obtener los datos de los ejes trans. (Seccion 4) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCAAxis(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaS4/' + PCA_ID;
    return this.http.get<any>(URL);

  }

  //  Name: getPCAMCU
  //  Description: Realiza una petición GET para obtener los datos de las U.M.C (Seccion 5) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCAMCU(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaS5/' + PCA_ID;
    return this.http.get<any>(URL);
  }

  //  Name: getPCABiblio
  //  Description: Realiza una petición GET para obtener los datos de la bibliografía (Seccion 6) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCABiblio(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaS6/' + PCA_ID;
    return this.http.get<any>(URL);
  }

  //  Name: getPCARemarks
  //  Description: Realiza una petición GET para obtener los datos  de las observaciones (Seccion 7) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCARemarks(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaS7/' + PCA_ID;
    return this.http.get<any>(URL);
  }

  //  Name: getPCAValidation
  //  Description: Realiza una petición GET para obtener los datos  de validación (Seccion 8) del PCA
  //  Date: 5/01/2021
  //  Author: Javier Q.
  getPCAValidation(PCA_ID: string) {
    const URL = environment.urlApi + 'R21/PcaFirmas/' + PCA_ID;
    return this.http.get<any>(URL);
  }
  updatePCA(data:any){
    const URL = environment.urlApi + 'R21/PcaFirmasUpdate';
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    console.log(body)
    return this.http.post(URL, body, { 'headers': headers })

  }
  checkPCA(data:any){
    const URL = environment.urlApi + 'R21/PcaFirmasRevUpdate/' ;
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    console.log(body)
    return this.http.post(URL, body, { 'headers': headers })
  }

  sendToApprovePCA(data:any){
    const URL = environment.urlApi + 'R21/PcaFirmasAprUpdate/' ;
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    console.log(body)
    return this.http.post(URL, body, { 'headers': headers })
  }

  updateCommentsSection(data:any){
    const URL = environment.urlApi + 'R21/ComentarioCreate';
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    console.log("Seccion Comentarios")
    console.log(body)

    return this.http.post(URL, body, { 'headers': headers })
  }

  ////#endregion "Javier Quishpe"
  /*    Name:         getAttachments
        Description:  Función que obtiene los documentos adjuntos
        Args:         id:number -> id del documento adjunto
                      type:string -> tipo de documento adjunto
        Return:       json con la información de documentos adjuntos
        Date:         25/10/2021
        Author:       Alexander C.
  */
  getAttachments(id: number, type: string): Observable<any> {
    const URL = environment.urlApi + 'R03/H19H20/'
    return this.http.get<any>(URL + type + '/' + id);
  }

  // #region david api
  // MODAL MATERIAL IVI
  /*
    Name:         getMaterialIvi
    Description:  Trae el material de la asignatura
    Args:         idClase:string
    Date:         26/10/2021
    Author:       David E.
  */
  getMaterialIvi(idClase: string): Observable<MaterialIvi[]> {
    const URL = environment.urlApi + 'R03/H17H18/'
    return this.http.get<MaterialIvi[]>(URL + idClase)
  }

  // Student-info
  /*
    Name:         getpersonalInformation
    Description:  Trae el los datos personales del estudiante
    Args:         idStudent:string
    Date:         11/11/2021
    Author:       David E.
  */
  getpersonalInformation(idStudent: string): Observable<PersonalInformation[]> {
    const URL = environment.urlApi + 'R06/H47DatosPersonales/'
    return this.http.get<PersonalInformation[]>(URL + idStudent)
  }
  /*
    Name:         getaddress
    Description:  Trae el los datos del domicilio del estudiante
    Args:         idStudent:string
    Date:         11/11/2021
    Author:       David E.
  */
  getaddress(idStudent: string): Observable<Address[]> {

    const URL = environment.urlApi + 'R06/H47Domicilio/'
    return this.http.get<Address[]>(URL + idStudent)
  }
  /*
    Name:         getdisability
    Description:  Trae el los datos de la discapacidad del estudiante si este tiene una
    Args:         idStudent:string
    Date:         11/11/2021
    Author:       David E.
  */
  getdisability(idStudent: string): Observable<Disability[]> {

    const URL = environment.urlApi + 'R06/H47Discapacidad/'
    return this.http.get<Disability[]>(URL + idStudent)
  }
  /*
    Name:         getEmergency
    Description:  Trae el los datos de la situacion medica del estudiante
    Args:         idStudent:string
    Date:         11/11/2021
    Author:       David E.
  */
  getEmergency(idStudent: string): Observable<Emergency[]> {

    const URL = environment.urlApi + 'R06/H47PorEmergencia/'
    return this.http.get<Emergency[]>(URL + idStudent)
  }
  /*
    Name:         getRepresentative
    Description:  Trae el los datos del representante del estudiante
    Args:         idStudent:string
    Date:         11/11/2021
    Author:       David E.
  */
  getRepresentative(idStudent: string): Observable<Representative[]> {

    const URL = environment.urlApi + 'R06/H47Representante/'
    return this.http.get<Representative[]>(URL + idStudent)
  }
  /*
    Name:         getBehavioral
    Description:  Trae el los datos del representante del estudiante
    Args:         idStudent:string
    Date:         15/11/2021
    Author:       David E.
  */
  getAttendance(idMaestro: number, idParcial: string): Observable<any> {

    const URL = environment.urlApi + 'R06/H45'
    return this.http.get<any>(`${URL}/${idMaestro}/${idParcial}`)
  }
  /*
    Name:         getBehavioral
    Description:  Trae el los datos del representante del estudiante
    Args:         idStudent:string
    Date:         15/11/2021
    Author:       David E.
  */
  getBehavioral(idMaestro: number, idParcial: string): Observable<any> {

    const URL = environment.urlApi + 'R06/H44'
    return this.http.get<any>(`${URL}/${idMaestro}/${idParcial}`)
  }

  /*
  Name:         addConcurrence
  Description:  Función que inserta el comportamiento del estudiantes
  Args:         idclase:number: -> id del documento adjunto
                idestudiante:number -> id del estudiante
                idtipoasistencia:number -> id del tipo de asistencia
  Date:         25/10/2021
  Author:       David E.
  */
  addConcurrence(idclase: number, idestudiante: number, comportamiento: number): Observable<string> {
    const URL = environment.urlApi + 'R06/UpdateH44/'
    const headers = { 'content-type': 'application/json' }
    return this.http.post<string>(URL + idclase + '/' + idestudiante + '/' + comportamiento, { 'headers': headers })
  }
  /*
  Name:         getTypeAssistance
  Description:  obtiene los tipos de asistencia
  Date:         16/11/2021
  Author:       David E.
  */
  getTypeAssistance(): Observable<any> {
    const URL = environment.urlApi + 'R03/H13AsisType/'
    return this.http.get<any>(URL);
  }
  /*
  Name:         getTypeBehavior
  Description:  obtiene los tipos de comportamiento
  Date:         16/11/2021
  Author:       David E.
  */
  getTypeBehavior(): Observable<any> {
    const URL = environment.urlApi + 'R06/H44CompType/'
    return this.http.get<any>(URL);
  }

  /*
  Name:         getReportBehavior
  Description:  obtiene el reporte de comportamiento
  Date:         16/11/2021
  Author:       David E.
  */
  getReportBehavior(idClase: number, parcial: string, idStudent: string): Observable<ReportBehaviorStudent[]> {
    const URL = environment.urlApi + 'R06/H55Comportamiento'
    return this.http.get<ReportBehaviorStudent[]>(`${URL}/${idClase}/${parcial}/${idStudent}`);
  }

  /*
  Name:         getReportConcurrence
  Description:  obtiene el reporte de asistencia
  Date:         16/11/2021
  Author:       David E.
  */
  getReportConcurrence(idClase: number, parcial: string, idStudent: string): Observable<ReportConcurrenceStudent[]> {
    const URL = environment.urlApi + 'R06/H55Asistencia'
    return this.http.get<ReportConcurrenceStudent[]>(`${URL}/${idClase}/${parcial}/${idStudent}`);
  }

  /*
  Name:         getReportActivity
  Description:  obtiene el reporte de la actividad
  Date:         30/11/2021
  Author:       David E.
  */
  getReportActivity(idActividad: string): Observable<ReportActivity[]> {
    const URL = environment.urlApi + 'R06/H54PrimeraParte'
    return this.http.get<ReportActivity[]>(`${URL}/${idActividad}`);
  }

  /*
  Name:         getReportActivityMedia
  Description:  obtiene la media del reporte de la actividad
  Date:         30/11/2021
  Author:       David E.
  */
  getReportActivityMedia(idActividad: string): Observable<ReportActivity[]> {
    const URL = environment.urlApi + 'R06/H54SegundaParte'
    return this.http.get<ReportActivity[]>(`${URL}/${idActividad}`);
  }

  /*
  Name:         setReportActivity
  Description:  envia el estado de la actividad
  Date:         30/11/2021
  Author:       David E.
  */
  setReportActivity(idActividad: string, estadoActividad: number): Observable<string> {
    const URL = environment.urlApi + 'R06/H54Post'
    const headers = { 'content-type': 'application/json' }
    return this.http.post<string>(`${URL}/${idActividad}/${estadoActividad}`, { 'headers': headers })
  }

  /*
  Name:         getStudentsToNotificate
  Description:  Trae la lista de estudiantes para notificar
  Date:         30/11/2021
  Author:       David E.
  */
  getStudentsToNotificate(idClasse: string | number): Observable<ListStudentNotification[]> {
    const URL = environment.urlApi + 'R06/H57'
    const headers = { 'content-type': 'application/json' }
    return this.http.get<ListStudentNotification[]>(`${URL}/${idClasse}`, { 'headers': headers })
  }

  /*
  Name:         sendNotificationTo
  Description:  envia las notificacionces
  Date:         30/11/2021
  Author:       David E.
  */
  sendNotificationTo(json: any): Observable<any> {
    const URL = environment.urlApi + 'R06/H57Post'
    return this.http.post<any>(`${URL}`, json)
  }

  // USER-info
  /*
    Name:         getUserPersonalInformation
    Description:  Trae el los datos personales del Usuario
    Args:         idUser:string
    Date:         11/11/2021
    Author:       David E.
  */
  getUserPersonalInformation(idUser: string | number): Observable<UserPersonalInfo[]> {
    const URL = environment.urlApi + 'R17/H80DatosPersonales/'
    return this.http.get<UserPersonalInfo[]>(URL + idUser)
  }
  /*
    Name:         getUserAddress
    Description:  Trae el los datos del domicilio del Usuario
    Args:         idUser:string|number
    Date:         11/11/2021
    Author:       David E.
  */
  getUserAddress(idUser: string | number): Observable<UserAddress[]> {

    const URL = environment.urlApi + 'R17/H80Domicilio/'
    return this.http.get<UserAddress[]>(URL + idUser)
  }

  /*
    Name:         getEmergency
    Description:  Trae el los datos de la situacion medica del Usuario
    Args:         idUser:string|number
    Date:         11/11/2021
    Author:       David E.
  */
  getUserEmergency(idUser: string | number): Observable<UserEmergency[]> {

    const URL = environment.urlApi + 'R17/H80PorEmergencia/'
    return this.http.get<UserEmergency[]>(URL + idUser)
  }
  /*
    Name:         getUserPaidMetod
    Description:  Trae el metodo de pago del Usuario
    Args:         idUser:string|number
    Date:         11/11/2021
    Author:       David E.
  */
  getUserPaidMetod(idUser: string | number): Observable<UserPaidMetod[]> {

    const URL = environment.urlApi + 'R17/H80MetodoCobro/'
    return this.http.get<UserPaidMetod[]>(URL + idUser)
  }

  /*
  Name:         editProfile
  Description:  edita el perfil del usuario
  Date:         13/12/2021
  Author:       David E.
  */
  editProfile(json: any): Observable<any> {
    const URL = environment.urlApi + 'R17/H80DatosPersonalesUpdate'
    return this.http.post<any>(`${URL}`, json)
  }

  // PCA
  /*
    Name:         getObjetives
    Description:  Trae los objetivos generales del PCA
    Args:         idPCA 
    Date:         06/01/2022
    Author:       David E.
  */
  getObjetives(idPCA: string | number): Observable<any[]> {
    const URL = environment.urlApi + 'R21/PcaS3ObjsArea/'
    return this.http.get<any[]>(URL + idPCA)
  }
  
  
  /*
  Name:         sendObjetives
  Description:  Envia los Objetivos de area del PCA
  Date:         13/12/2021
  Author:       David E.
  */
  sendObjetives(json: any): Observable<any> {
    const URL = environment.urlApi + 'R21/PcaS3AddObjsArea'
    return this.http.post<any>(`${URL}`, json)
  }
  /*
    Name:         getEjes
    Description:  Trae los ejes del PCA
    Date:         11/01/2022
    Author:       David E.
  */
  getEjes(): Observable<any[]> {
    const URL = environment.urlApi + 'R21/PcaS4EjesM/'
    return this.http.get<any[]>(URL )
  }
  
  
  /*
  Name:         sendEjes
  Description:  Envia los ejes del PCA
  Date:         11/01/2022
  Author:       David E.
  */
  sendEjes(json: any): Observable<any> {
    const URL = environment.urlApi + '/R21/PcaS4AddEje'
    return this.http.post<any>(`${URL}`, json)
  }

  /*
    Name:         getObjetivesCriteriaUser
    Description:  Trae los objetivos de unidad del PUD
    Args:         idPud: 
    Date:         06/01/2022
    Author:       David E.
  */
  getObjetivesCriteriaUser(idPud: string | number): Observable<any[]> {
    const URL = environment.urlApi + 'R21/H96Seccion3/'
    return this.http.get<any[]>(URL + idPud)
  }


  // PUD
  /*
    Name:         getObjetivesUnit
    Description:  Trae los objetivos de unidad del PUD
    Args:         idClase: 
    Date:         06/01/2022
    Author:       David E.
  */
  getObjetivesUnit(idClase: string | number): Observable<any[]> {
    const URL = environment.urlApi + 'R21/H97ObjetivosUnidad/'
    return this.http.get<any[]>(URL + idClase)
  }

  /*
  Name:         sendObjetivesUnit
  Description:  Envia los Objetivos de la unidad del PUD
  Date:         13/12/2021
  Author:       David E.
  */
  sendObjetivesUnit(json: any): Observable<any> {
    const URL = environment.urlApi + 'R21/H97ObjetivosUnidadPost'
    return this.http.post<any>(`${URL}`, json)
  }

  /*
    Name:         getCriterion
    Description:  Trae los criterios del PUD
    Args:         idClase: 
    Date:         06/01/2022
    Author:       David E.
  */
  getCriterion(idClase: string | number): Observable<any[]> {
    const URL = environment.urlApi + 'R21/H98Criterios/'
    return this.http.get<any[]>(URL + idClase)
  }

  /*
  Name:         sendCriteria
  Description:  Envia los Criterios del PUD
  Date:         13/12/2021
  Author:       David E.
  */
  sendCriteria(json: any): Observable<any> {
    const URL = environment.urlApi + 'R21/H98CriteriosPost'
    return this.http.post<any>(`${URL}`, json)
  }

  /*
    Name:         getDexterity
    Description:  Trae las destrezas del PUD
    Args:         idPud
    Date:         06/01/2022
    Author:       David E.
  */
  getDexterity(idPud: string | number): Observable<any> {
    const URL = environment.urlApi + 'R21/H99Destrezas/'
    return this.http.get<any>(URL + idPud)
  }
  /*
    Name:         getIndicator
    Description:  Trae los indicadores del PUD
    Args:         idPud
    Date:         06/01/2022
    Author:       David E.
  */
  getIndicator(idDestreza: string | number): Observable<any> {
    const URL = environment.urlApi + 'R21/H99Indicadores/'
    return this.http.get<any>(URL + idDestreza)
  }
  /*
    Name:         getTecnics
    Description:  Trae los las tecnicas del PUD
    Args:         idPud
    Date:         06/01/2022
    Author:       David E.
  */
  getTecnics(): Observable<any> {
    const URL = environment.urlApi + 'R21/H99Tecnicas/'
    return this.http.get<any>(URL)
  }
  /*
    Name:         getAdapt
    Description:  Trae los estudiantes NEE PUD
    Args:         idPud
    Date:         06/01/2022
    Author:       David E.
  */
  getAdapt(idDestreza: string | number): Observable<any> {
    const URL = environment.urlApi + 'R21/H100Adaptacion/'
    return this.http.get<any>(URL + idDestreza)
  }

  /*
  Name:         sendCurricular
  Description:  Envia el plan curricular del PUD
  Date:         13/12/2021
  Author:       David E.
  */
  sendCurricular(json: any): Observable<any> {
    const URL = environment.urlApi + 'R21/H99Planificacion'
    return this.http.post<any>(`${URL}`, json)
  }

  /*
  Name:         editProfile
  Description:  Envia las Bibliografia / Webgrafia del PUD
  Date:         13/12/2021
  Author:       David E.
  */
  sendbibliography(json: any): Observable<any> {
    const URL = environment.urlApi + 'R21/H101Bibliografia'
    return this.http.post<any>(`${URL}`, json)
  }

  /*
  Name:         sendObservations
  Description:  Envia las observacionesa del PUD
  Date:         13/12/2021
  Author:       David E.
  */
  sendObservations(json: any): Observable<any> {
    const URL = environment.urlApi + 'R21/H102Observaciones'
    return this.http.post<any>(`${URL}`, json)
  }


  // #endregion david


  // NOTIFICACIONES
  getNotifications() {
    const URL = environment.urlApi + 'r00/h86/1'
    return this.http.get(URL);
  }


  /*    Name:         getAssistance1
        Description:  Función que obtiene la primera parte de la asistencia
        Args:         id:number: -> id del documento adjunto
        Date:         25/10/2021
        Author:       Alexander C.
  */
  getAssistance1(id: number): Observable<any> {
    const URL = environment.urlApi + 'R03/H13Seccion1/'
    return this.http.get<any>(URL + id);
  }
  /*    Name:         getAssistance2
        Description:  Función que obtiene la primera parte de la asistencia
        Args:         id:number: -> id del documento adjunto
        Date:         25/10/2021
        Author:       Alexander C.
  */
  getAssistance2(id: number): Observable<any> {
    const URL = environment.urlApi + 'R03/H13Seccion2/'
    return this.http.get<any>(URL + id);
  }
  /*    Name:         getAssistance
        Description:  Función que inserta la asistencia de estudiantes
        Args:         idclase:number: -> id del documento adjunto
                      idestudiante:number -> id del estudiante
                      idtipoasistencia:number -> id del tipo de asistencia
        Date:         25/10/2021
        Author:       Alexander C.
  */
  addAssistance(idclase: number, idestudiante: number, idtipoasistencia: number) {
    const URL = environment.urlApi + 'R03/UpdateH13/'
    const headers = { 'content-type': 'application/json' }
    return this.http.post(URL + idclase + '/' + idestudiante + '/' + idtipoasistencia, { 'headers': headers })
  }

  /*    Name:         addJustify
        Description:  Función que agrega la justificacion
        Args:         id:number: -> id del documento adjunto
        Date:         25/10/2021
        Author:       Alexander C.
  */
  addJustify(data:any) {
    const URL = environment.urlApi + 'R03/InsertH21/'
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    return this.http.post(URL, body, { 'headers': headers })
  }

  /*    Name:         getJustify
        Description:  Función que obtiene la justicacion
        Args:         id:number: -> id del documento adjunto
        Date:         25/10/2021
        Author:       Alexander C.
  */
  getJustify(id: number): Observable<any> {
    const URL = environment.urlApi + 'R03/H21/'
    return this.http.get<any>(URL + id);
  }



  // CHECK BADGEDs
  checkBadge(label: string, amount: any) {
    for (const iterator of MENU) {
      if (iterator.label === label) {
        if (amount === 0) {
          iterator.is_badge = false;
        } else {
          iterator.is_badge = true;
          iterator.badge.text = amount;
        }
      }
    }
  }
  /*    Name:         decodeCaracter
        Description:  Función que decodifica el caracter
        Args:         message:any -> mensaje
        Date:         04/11/2021
        Author:       Alexander C.
  */
  decodeCaracter(message: any): any {
    const data = JSON.stringify(message);
    return JSON.parse(data.split('+').join('a9i5u1'));
  }

  // #region Uploading Files to Azure Blob Storage with Angular and ASP.NET Core 
  uploadD(formData: FormData) {
    const URL = environment.urlApi + 'api/Upload' // usar el https ya para azure y cambiar la URL
    return this.http.post<{ path: string }>(URL, formData);
  }
  // #endregion 


  // #region Alexander

  /*    Name:         getTeachingMaterialsDegre
        Description:  Función que obtiene los datos de material didactico-grado para el filtro
        Date:         04/11/2021
        Author:       Alexander C.
  */

  getTeachingMaterialsDegree() {
    const URL = environment.urlApi + 'R05/H30F1/'
    return this.http.get(URL);
  }
  /*    Name:         getTeachingMaterialsDegre
        Description:  Función que obtiene los datos de material didactico-grado para el filtro
        Date:         04/11/2021
        Author:       Alexander C.
  */
  getTeachingMaterialsSubject(): Observable<any> {
    const URL = environment.urlApi + 'R05/H30F2/'
    return this.http.get<any>(URL);
  }

  /*    Name:         getTeachingMaterialsDegre
        Description:  Función que obtiene los datos de material didactico- para el filtro
        Date:         04/11/2021
        Author:       Alexander C.
  */
  getTeachingMaterial(): Observable<any> {
    const URL = environment.urlApi + 'R05/H30MD/'
    return this.http.get<any>(URL);
  }

  /*    Name:         getTeachingMaterialsDegre
        Description:  Función que obtiene los datos de material didactico- para el filtro
        Date:         04/11/2021
        Author:       Alexander C.
  */
  getGamification(): Observable<any> {
    const URL = environment.urlApi + 'R05/H35GM/'
    return this.http.get<any>(URL);
  }
  /*    Name:         getGamificationDetail
      Description:  Función que obtiene los detalles de gamificacion
      Date:         04/11/2021
      Author:       Alexander C.
*/
  getGamificationDetail(id: number): Observable<any> {
    const URL = environment.urlApi + 'R05/H38/'
    return this.http.get<any>(URL + id);
  }


  /*    Name:         getTeachingMaterialsDegre
        Description:  Función que obtiene los datos de material didactico- para el filtro
        Date:         04/11/2021
        Author:       Alexander C.
  */
  getMaterial(id: number): Observable<any> {
    const URL = environment.urlApi + 'R05/H33/'
    return this.http.get<any>(URL + id);
  }

  // #endregion 
  // #region Javier

  //  Name: updateClassStatus
  //  Description: Realiza una petición POST hacia una LA api
  //  Date: 05/11/2021
  //  Author: Javier Q.
  updateClassStatus(idclase: string, estadoClase: string, estadodocenteclase: string): Observable<any> {
    const URL = environment.urlApi + 'R03/ChangeStatusH12/' + idclase + "/" + estadoClase + "/" + estadodocenteclase;
    const headers = { 'content-type': 'application/json' }
    return this.http.post(URL, null, { 'headers': headers })
  }

  updateStartHour(idClase: string, horainiciorealclase: string) {
    const URL = environment.urlApi + 'R03/UpdateStartHourH12/' + idClase + "/" + horainiciorealclase;
    const headers = { 'content-type': 'application/json' }
    return this.http.post(URL, null, { 'headers': headers })
  }

  updateEndTime(idClase: string, horainiciorealclase: string) {
    const URL = environment.urlApi + 'R03/UpdateEndTimeH12/' + idClase + "/" + horainiciorealclase;
    const headers = { 'content-type': 'application/json' }
    return this.http.post(URL, null, { 'headers': headers })
  }

  updateGrade(custom: any) {
    let body = JSON.stringify(custom);
    const URL = environment.urlApi + 'R06/H59Update';
    const headers = { 'content-type': 'application/json' }
    return this.http.post(URL, body, { 'headers': headers })
  }
  // #endregion 

  // #region Tato

  // Author: Carlos Sanchez M.
  // Description: Obtiene la configuracion para crear la actividad
  // Date: 01/12/2021
  getConfigCreateActivity(classroom: number, activity: number) {
    const URL = environment.urlApi + 'R06/H49Config/' + classroom + '/' + activity
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene la configuracion para crear la actividad
  // Date: 01/12/2021
  createActivity(data: any) {
    const URL = environment.urlApi + 'R06/H49Insert';
    return this.http.post(URL, data);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene la configuracion para crear la actividad
  // Date: 01/12/2021
  updateActivity(data: any) {
    const URL = environment.urlApi + 'R06/H52Update';
    return this.http.post(URL, data);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene la configuracion para crear la actividad
  // Date: 02/12/2021
  getActivityById(id: number) {
    const URL = environment.urlApi + 'R06/H51/' + id;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene los datos de la informacion PUD
  // Date: 07/01/2022
  getPUDInformation(id: number) {
    const URL = environment.urlApi + 'R21/PcaPudS1/' + id;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene los datos de la tiempo PUD
  // Date: 07/01/2022
  getPUDTime(id: number) {
    const URL = environment.urlApi + 'R21/H96Seccion2/' + id;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene los datos de la planificacion PUD
  // Date: 07/01/2022
  getPUDPlaning(id: number, section: boolean) {
    const URL = environment.urlApi + 'R21/H96Seccion3/' + id + '/' + section;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene los datos de la adaptacion PUD
  // Date: 07/01/2022
  getPUDAdaptations(id: number) {
    const URL = environment.urlApi + 'R21/H96Seccion4/' + id;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene los datos de la bibliografia PUD
  // Date: 07/01/2022
  getPUDBibliography(id: number) {
    const URL = environment.urlApi + 'R21/H96Seccion5/' + id;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene los datos de la observacion PUD
  // Date: 07/01/2022
  getPUDObservation(id: number) {
    const URL = environment.urlApi + 'R21/H96Seccion6/' + id;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Obtiene los datos de la observacion PUD
  // Date: 07/01/2022
  getPUDValidation(id: number) {
    const URL = environment.urlApi + 'R21/H96Seccion7/' + id;
    return this.http.get(URL);
  }

  // Author: Carlos Sanchez M.
  // Description: Guarda el  PUD
  // Date: 07/01/2022
  updatePUD(data: any) {
    const URL = environment.urlApi + 'R21/H96updatePUD/';
    return this.http.post(URL, data);
  }

  // #endregion



















  // #region Uploading Files to Azure Blob Storage with Angular and ASP.NET Core 
  upload(doc: File) {
    //construirNombre
    let nombre = this.auth.currentUser.id + '-' + moment().format('YYYY-MM-DD') + '-' + moment().format('HH-mm-ss') + environment.ivisplitstring + doc.name;
    const formData = new FormData();
    formData.append('file', doc, nombre);
    const URL = environment.urlApi + 'api/Upload' // usar el https ya para azure y cambiar la URL
    return this.http.post<{ path: string }>(URL, formData);
  }
  // #endregion 
  // #region getPersonalRepository

  /*    Name:         getPersonalRepository
        Description:  Función que obtiene el repositorio personal
        Args:         id:number -> id del docente
        Return:       json con la información de repositorio personal
        Date:         29/10/2021
        Author:       Alexander Conteron.
  */
  getPersonalRepository(id: number, id2: number): Observable<any> {
    const URL = environment.urlApi + 'R06/H48/'
    return this.http.get<any>(URL + id + '/' + id2);
  }
  // #endregion 

  // #region getPersonalRepository

  /*    Name:         getPersonalRepository
        Description:  Función que obtiene el repositorio general
        Args:         id:number -> id del usuario
        Return:       json con la información de repositorio generañ
        Date:         08/12/2021
        Author:       Alexander Conteron.
  */
  getGeneralRepository(pagination?: number, filterQualification?: number, filterDate?: number, filterText?: string, filterDateD?: string): Observable<any> {
    const URL = environment.urlApi + 'R04/H22?PageNumber='
    return this.http.get<any>(URL + pagination + "&calificaci=" + filterQualification + "&filterText=" + filterText + "&filterDate=" + filterDate + "&filterDateD=" + filterDateD);
  }
  // #endregion 


  // #region getTypeActivity

  /*    Name:         getTypeActivity
        Description:  Función que obtiene el repositorio personal
        Args:         id:number -> id del docente
        Return:       json con la información de repositorio personal
        Date:         29/10/2021
        Author:       Alexander Conteron.
  */
  getTypeActivity(id: number): Observable<any> {
    const URL = environment.urlApi + 'R06/H48TipoActividad/'
    return this.http.get<any>(URL + id);
  }
  // #endregion 



  // #region getTypeActivity

  /*    Name:         getTypeActivity
        Description:  Función que se agrega una actividad al repositorio personal
        Args:         id:number -> id del docente
        Return:       json con la información de repositorio personal
        Date:         29/10/2021
        Author:       Alexander Conteron.
  */
  addGeneralRepository(idUsuario: number, idActividad: number, calificacion: number): Observable<any> {
    const URL = environment.urlApi + 'R04/InsertH26/'
    const headers = { 'content-type': 'application/json' }
    return this.http.post(URL + idUsuario + '/' + idActividad + '/' + calificacion, { 'headers': headers })
  }
  // #endregion 



  // #region countRepositoryCurrent

  /*    Name:         countRepositoryCurrent
        Description:  Función que obtiene el numero de activiadades nuevas del dashboard
        Return:       contador de actividades
        Date:         13/12/2021
        Author:       Alexander Conteron.
  */
  countRepositoryCurrent(): Observable<any> {
    const URL = environment.urlApi + 'R02/H09'
    return this.http.get<any>(URL);
  }
  // #endregion 
  // #region progressClass

  /*    Name:         progressClass
        Description:  Función que obtiene el porcentaje del progreso del anio lectivo
        Return:       Porcentaje del anio lectivo
        Date:         14/12/2021
        Author:       Alexander Conteron.
  */
  progressClass(idUsuario: number): Observable<any> {
    const URL = environment.urlApi + 'R02/H11/'
    return this.http.get<any>(URL + idUsuario);
  }
  // #endregion 

  // #region getPca

  /*    Name:         getPca
        Description:  Función que obtiene el PCA
        Return:       json con informacion del PCA
        Date:         14/12/2021
        Author:       Alexander Conteron.
  */
  getPca(idMaestro: number): Observable<any> {
    const URL = environment.urlApi + 'R21/H91/'
    return this.http.get<any>(URL + idMaestro);
  }
  // #endregion 

  // #region getPca

  /*    Name:         getPud
        Description:  Función que obtiene el PUD
        Return:       json con informacion del PUD
        Date:         14/12/2021
        Author:       Alexander Conteron.
  */
  getPud(idMaestro: number): Observable<any> {
    const URL = environment.urlApi + 'R21/H91Pud/'
    return this.http.get<any>(URL + idMaestro);
  }
  // #endregion 

  // #region getPca

  /*    Name:         getPud
        Description:  Función que obtiene el PUD
        Return:       json con informacion del PUD
        Date:         14/12/2021
        Author:       Alexander Conteron.
  */
        getiDPud(idMaestro: number): Observable<any> {
          const URL = environment.urlApi + 'R21/H91IdPud/'
          return this.http.get<any>(URL + idMaestro);
        }
        // #endregion 

}
