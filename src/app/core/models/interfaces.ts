
export interface Attachments {
    idmaterialadjuntoclase: number,
    documentomaterialadjuntoclase: string
}

export interface Assistance1 {
    idclase?: number,
    count: number,
    fechaclase: string,
    nombregrado: string,
    nombremateria: string,
    paralelogrado: string,
    descripcionestadodocenteclase?: string
}


export interface Assistance2 {
    idestudiante?: number,
    apellidosestudiante: string,
    descripciontipoasistencia: string;
    fotoestudiante: string;
    nombresestudiante: string,
    idtipoasistencia: number,
}

export interface Justify {
    apellidosestudiante: string,
    descripciontipoasistencia: string;
    fotoestudiante: string;
    nombresestudiante: string,
    idtipoasistencia: number,
}

// #region david

export interface Main {
    area: boolean;
    type: string;
    data?: Testdata[];
}
export interface Testdata {
    code: string,
    text: string,
    state: number, // 0: creado, 1:original , 2: modificado
    txt?: string,
    edited?: boolean,
    created?: boolean,
    modified?: boolean,
}

export interface Pudpca {
    idobjetivosarea?:  number;
    idObjetivo?:  number;
    idcriterio?:  number;
    id?:  number;
    codigo:      string;
    descripcion: string;
    origin?: string;
    estado:      number;
    originestado?: number;
    txt?: string,
    edited?: boolean,
    created?: boolean,
    modified?: boolean,
}
export interface MaterialIvi {
    grado: string;
    unidades: Datum[];
}

export interface Datum {
    idmaterialivi: number;
    resumenmaterialivi: string;
    descripciongradoivi: string;
    unidadmaterialivi: string;
    imagenmaterialivi: string;
    urlmaterialivi: string;
    state?: number;
    temas: Temasmaterialivi[];
}

export interface Temasmaterialivi {
    tema: string;
}

//  Student-info
export interface PersonalInformation {
    fotoestudiante?: string;
    nombresestudiante?: string;
    apellidosestudiante?: string;
    cedulaestudiante?: string;
    fechanacimientoestudiante?: Date;
    ciudadnacimientoestudiante?: string;
    nacionalidadestudiante?: string;
    sexoestudiante?: boolean;
    partidanacimiento?: string;
    carnevacunacion?: string;
    emailestudiante?: null;
}
export interface Address {
    provinciadomicilioestudiante?: string;
    ciudaddomicilioestudiante?: string;
    parroquiadomicilioestudiante?: string;
    direccionestudiante?: null;
    referenciadomicilioestudiante?: string;
    telefonodomicilioestudiante?: string;
}
export interface Disability {
    estdis?: string;
    nombrediscapacidad?: string;
    gradoadaptacioncurricular1?: string;
    fechaevaluaciondiscapacidad?: Date;
    porcentajeconadisdiscapacidad?: number;
    gradoconadisdiscapacidad?: string;
}
export interface Emergency {
    alergiaestudiante?: string;
    tiposangreestudiante?: string;
    hospitalpreferenciaestudiante?: string;
    direccionhospitalpreferenciaestudiante?: string;
    llamar?: Llamar[];
}

export interface Llamar {
    llamar?: string;

}

export interface Representative {
    nombresrepresentante?: string;
    apellidosrepresentante?: string;
    parentescorepresentante?: string;
    emailrepresentante?: string;
    telefonorepresentante?: string;
    profesionrepresentante?: string;
    lugardetrabajorepresentante?: string;
    principalrepresentante?: boolean;
}

// Asistencia
export interface TypeConcurrence {
    idtipoasistencia: number;
    descripciontipoasistencia: string;
    estudiantesasistencia: any[];
}
export interface TypeBehavioral {
    idtipocomportamiento: number;
    literaltipocomportamiento: string;
    descripciontipocomportamiento: string;
    comportamientos: any[];
}
export interface BehavioralStudent {
    idestudiante: number;
    fotoestudiante: string;
    discapacidad: boolean;
    estudiante: string;
    comportamientos: Behavioral[];
}

export interface Behavioral {
    diahorarioclase: number;
    idclase: number;
    fechaclase: Date;
    idtipocomportamiento: number;
    literaltipocomportamiento: string;
    descripciontipocomportamiento: string;
}
export interface Attendance {
    idestudiante: number;
    fotoestudiante: string;
    discapacidad: boolean;
    estudiante: string;
    asistencias: Asistencia[];
}

export interface Asistencia {
    diahorarioclase: number;
    idclase: number;
    fechaclase: Date;
    idtipoasistencia: number;
    descripciontipoasistencia: string;
}

export interface AnioLectivo {
    idaniolectivo: number;
    fechainicioaniolectivo: Date;
    fechafinaniolectivo: Date;
    quimestres: Quimestre[];
}

export interface Quimestre {
    nombrequimestre: string;
    idquimestre: number;
    parciales: Parciale[];
}

export interface Parciale {
    idparcial: number;
    nombreparcial: string;
    selected?: boolean;
    fechainicioparcial: Date;
    fechafinparcial: Date;
}

export interface ReportBehaviorStudent {
    idestudiante: number;
    estudiante: string;
    comportamiento: ReportBehavior[];
}

export interface ReportBehavior {
    desc: string;
    lit: string;
    cant: number;
    porce: number;
}

export interface ReportConcurrenceStudent {
    idestudiante: number;
    estudiante: string;
    comportamiento: ReportConcurrence[];
}

export interface ReportConcurrence {
    desc: string;
    cant: number;
    porce: number;
}

export interface ReportActivity {
    porcentaje?: number;
    cantidad?: number;
    entregadonota?: boolean;
    atiemponota?: boolean;
    reporte?: string;
    prom?: number;
    estado?: boolean;
    contador?: number;
}

export interface ListStudentNotification {
    estudiante: string;
    fotoestudiante: string;
    idUsuarioEstudiante: number;
    idUsuarioRepresentante: number;
    selected: boolean;
}

export interface UserPersonalInfo {
    iddocente: number;
    fotodocente: string;
    cargodocente: string;
    nombresdocente: string;
    apellidosdocente: string;
    ceduladocente: string;
    fechanacimientodocente: Date;
    ciudadnacimientodocente: string;
    estadocivildocente: string;
    nacionalidaddocente: string;
    niveldeeducaciondocente: string;
    emaildocente: string;
    telefonofijodocente: string;
    celulardocente: string;
    operadoradocente: string;
    documentohojavidadocente: string;
}

export interface UserAddress {
    provinciaresidenciadocente: string;
    ciudadresidenciadocente: string;
    parroquiaresidenciadocente: string;
    direccionresidenciadocente: string;
    descripcionresidenciadocente: string;
    telefonoresidenciadocente: string;
}

export interface UserEmergency {
    alergiasdocente: string;
    tipodesangredocente: string;
    clinicapreferenciadocente: string;
    direccionclinicapreferenciadocente: string;
    llamar: UserLlamar[];
}
export interface UserLlamar {
    idencasodeemergencia?:       number;
    nombreencasodeemergencia:   string;
    relacionencasodeemergencia: string;
    telefonoencasodeemergencia: string;
}
export interface UserPaidMetod {
    entidadbancariadocente: string;
    tipodecuentabancariadocente: string;
    numerodecuentabancariadocente: string;
    razonsocialcuentabancariadocente: string;
    cedulacuentabancariadocente: string;
    emailcuentabancariadocente: string;
    salariodocente: number;
    fechadepagodocente: number;
    fechadecontrataciondocente: Date;
    fechafinalizacioncontratodocente: Date;
    horatrabajo: string;
}

// #endregion



//#region Interfaces Javier Quishpe 27/10/2021 
export interface Clase {
    idclase?: number,
    fechahoraclase: Date,
    duracion: string,
    estadoclase?: number,
    descripcionestadoclase?: string,
    estadodocenteclase?: number,
    descripcionestadodocenteclase?: string,
    horainiciorealclase?: string,
    horafinalrealclase?: string,
    temaclase: string,
    enlaceclase: string,
    descripcionclase: string,
    gradoparalelomateriaclase: string,
    nombreparcial: string,
    archivos: any
}

export interface ClassAttachments {
    idmaterialadjuntoclase: number,
    documentomaterialadjuntoclase: string,
    tipomaterialadjuntoclase: boolean
}

export class Class {
    idclase?: number;
    fechahoraclase: Date;
    fechahorafinclase: Date;
    duracion: string;
    estadoclase?: number;
    descripcionestadoclase?: string;
    estadodocenteclase?: number;
    descripcionestadodocenteclase?: string;
    horainiciorealclase: string;
    horafinalrealclase?: string;
    temaclase: string;
    enlaceclase: string;
    descripcionclase: string;
    gradoparalelomateriaclase: string;
    nombreparcial: string;
    archivosadjuntos?: any;
    material: any

}

export class ClaseEditable {
    idclase?: string;
    temaclase: string;
    enlaceclase: string;
    descripcionclase: string;
    materialadjuntoclases: Array<DocumentIVI>;

}

export class DocumentIVI {
    documentomaterialadjuntoclase: string;
    tipomaterialadjuntoclase: boolean;
    constructor(documentomaterialadjuntoclase: string, tipomaterialadjuntoclase: boolean) {
        this.documentomaterialadjuntoclase = documentomaterialadjuntoclase;
        this.tipomaterialadjuntoclase = tipomaterialadjuntoclase;
    }
}


//#endregion Interfaces

// interfaces de prueba

export interface User {
    id: string,
    name: string,
    address: string,
    imgPath: string
}

export interface UserToCreate {
    name: string,
    address: string,
    imgPath: string
}



// #region Alexander
export interface Degree {
    idgradoivi: number,
    descripciongradoivi: string,
}
// #endregion 
// #region David

// #endregion 
// #region Javier

// #endregion 
// #region Tato
export interface BDResponse {
    message: string,
    data: any,
}
  // #endregion
