//#region javi

export class Section {
    sectionID: string;
    percentage: number;
    sectionName: string;
    activities: Array<Task>;
    constructor(sectionID: string, percentage: number, sectionName: string, activities?: Array<Task>) {
      this.sectionID = sectionID;
      this.percentage = percentage;
      this.sectionName = sectionName;
  
    }
  }
  
  export class Task {
    finalGrade:number=0;
    taskID: string;
    taskInfo:string;
    taskType: string;
    taskDescription: string;
    taskStatements:Array<Statement>=[];
    taskCreationDate:Date;
    taskInitDate:Date;
    taskEndDate:Date;
    taskUpdateDate:Date;
    finalParcial:Date;
    taskDocuments:Array<any>=[];
    taskLinks:Array<any>=[];
    author:string;
    extra_info:any={
      institucion:"",
      grado:"",
      materia:"",
      idusuario:"",
      calificacion:0,
      vistas:0
  
    };
    constructor(taskID: string, taskType: string, taskDescription: string) {
      this.taskID = taskID;
      this.taskType = taskType;
      this.taskDescription = taskDescription;
    }
    getTotal(){
     
      let sum=0;
   
      this.taskStatements.forEach( (statementx) => {
          sum=sum+statementx.statement_value;
        
      });
      return sum;
    }
  }
  
  export class Student {
    studentID: string;
    foto:string;
    studentFullName: string;
    grades: Array<number>;
    gradeSet: Array<Grade>=[];
    sectionAvgGrades: Array<Grade>=[];
    result: string;
    disability = "NO";
    finalGrade:number;
    constructor(studentID: string, studentFullName: string, grades: Array<number>, gradeSet?: Array<Grade>) {
      this.studentID = studentID;
      this.studentFullName = studentFullName;
      this.grades = grades;
      this.result = "";
      this.disability = "NO"
      if (gradeSet) {
        this.gradeSet = gradeSet;
      }
  
    }
  }
  
    export class Grade{
      idnota:string;
      idactividad:string;
      descripcionactividadgeneral:string;
      valornota:number;
      atiemponota?:boolean;
      entregado:boolean=true;
      idheader:string;
      fechamodificacionnota:Date;
      observacionnota:string
      prom:number;
      activo:true;
      constructor(idnota:string,idactividad:string,descriptionactivitygeneral:string,valornota:number,atiemponota:boolean){
        this.idnota=idnota;
        this.idactividad=idactividad;
        this.descripcionactividadgeneral=descriptionactivitygeneral;
        this.valornota=valornota;
        this.atiemponota=atiemponota;
      }
    }


    //Entidades para Historia 0649
    export class Statement{
      //Statement Types (Testing ONLY)
      //1 => Verdadero Falso
         //2 => Selección Unica
            //3 => Selección Múltiple
               //4 => Opcion Libre
      statement_image:string=""
      is_free:boolean=false;
      id_statement:string;
      description_type_statement:string;
      statement_description:string;
       id_type_statement:string;
       id_activity:string;
       description_activity:string;
       statement_value:number;
       statement_total:number=0;
       free_answer:string;
        option_set:Array<Option>=[];
        gradeDetailsID:string="";
        answer_document:any={
          enlace:"",
          nombre:""
        }
        constructor(id_statement:string,id_type_statement:string,id_activity:string, 
          description_type_statement:string,statement_value:number,statement_description:string){
              this.id_statement=id_statement;
              this.id_type_statement=id_type_statement;
              this.description_type_statement=description_type_statement;
              this.id_activity=id_activity;
              this.statement_value=statement_value;
              this.statement_description=statement_description;
        }

        setStatementTotal(){
         if(this.option_set.length>0){
          let correctAnswers =0;
          this.option_set.forEach( (option:Option)=> {
              if(option.is_correct){
                correctAnswers++;
              }
          });
        let gradeEq = (this.statement_value/correctAnswers)
          //Calcular
          let supposedCorrectAnswers=0;
          this.option_set.forEach( (option:Option)=> {
            if(option.marked_as_correct &&option.is_correct){
              supposedCorrectAnswers++;
            }
        });

        this.statement_total=parseFloat( (gradeEq*supposedCorrectAnswers).toFixed(2));
          }//else{
        //    //El tipo de enunciado es de opcion libre
        //  }
        


        }

        clearOptionSet(){
          this.option_set=[];
        }


    }

    export class Option{
      option_image:string=""
      option_id:string;
      statement_id:string;
      option_description:string;
      is_correct:boolean;
      marked_as_correct:boolean;
      free_answer:string;
      
      constructor(option_id:string,statement_id:string, option_description:string ,is_correct:boolean,marked_as_correct:boolean,free_answer:string){
this.option_id=option_id;
this.statement_id=statement_id;
this.option_description=option_description;
this.is_correct=is_correct;
this.marked_as_correct=marked_as_correct;
this.free_answer=free_answer;
      }



    }

    export class AlertMesagge{
      id:string;
      date:Date;
      subject:string;
      addressee:string;
      detail:string;
      emitter:string;
      constructor(id:string,date:Date,subject:string,addressee:string,detail:string,emitter:string){
this.id=id;
this.date=date;
this.subject=subject;
this.addressee=addressee;
this.detail=detail;
this.emitter=emitter;
      }
    }

export class PCAMC{
  PCAMcUnits:Array <PCAMcUnit>=[];
  comments:Array<PCAComment>=[];
  constructor( PCAMcUnits:Array <PCAMcUnit>,comments:Array<PCAComment> ){
this.PCAMcUnits=PCAMcUnits;
this.comments=comments;
  }

  insertComment(comment:string,author:string,author_id:string ){
    let com1 =  new PCAComment("-1",comment)
com1.comment_author=author;
com1.author_id=author_id;
    this.comments.push(com1);


  }
}

export class PCABiblio{
PCABiblio:Array <Biblio>=[];
comments:Array<PCAComment>=[];
constructor( PCABiblios:Array <Biblio>,comments:Array<PCAComment> ){
this.PCABiblio=PCABiblios;
this.comments=comments;
}
insertComment(comment:string,author:string,author_id:string ){
  let com1 =  new PCAComment("-1",comment)
com1.comment_author=author;
com1.author_id=author_id;
  this.comments.push(com1);


}

}

export class PCARemarks{
  PCARemarks:Array <PCARemark>=[];
comments:Array<PCAComment>=[];
constructor( PCARemarksSet:Array <PCARemark>,comments:Array<PCAComment> ){
this.PCARemarks=PCARemarksSet;
this.comments=comments;
}
insertComment(comment:string,author:string,author_id:string ){
  let com1 =  new PCAComment("-1",comment)
com1.comment_author=author;
com1.author_id=author_id;
  this.comments.push(com1);


}
}
    export class PCA{
      PCA_ID:string;
college:string;
current_year:string;
college_logo:string;
state:string="0";
PCAData:PCAData;
PCATime:PCATime;
PCAGolas:PCAGoals;
PCA_Axis:PCA_Axis;
PCAMcUnits: PCAMC;
PCABiblio: PCABiblio; 
PCARemarks: PCARemarks; 
PCAValidation:PCAValidation;
constructor(PCA_ID:string,college:string,current_year:string,college_logo:string,_PCAData?:PCAData){
this.PCA_ID=PCA_ID;
this.college=college;
this.current_year=current_year;
this.college_logo=college_logo;
if(_PCAData){
this.PCAData=_PCAData;
}
}
    }
 export class PCAValidation{
  CreatedByInfo:CreatedByInfo;
  CheckedByInfo:CheckedByInfo;
  ApprovedByInfo:ApprovedByInfo;
  comments:Array<PCAComment>=[];
  constructor(  CreatedByInfo:CreatedByInfo,
    CheckedByInfo:CheckedByInfo,
    ApprovedByInfo:ApprovedByInfo,
    comments:Array<PCAComment>){
this.CreatedByInfo=CreatedByInfo;
this.CheckedByInfo=CheckedByInfo;
this.ApprovedByInfo=ApprovedByInfo;
this.comments=comments;




  }

  insertComment(comment:string,author:string,author_id:string ){
    let com1 =  new PCAComment("-1",comment)
com1.comment_author=author;
com1.author_id=author_id;
    this.comments.push(com1);


  }

  
 }
    

    export class  CreatedByInfo{
      creator_name:string;
      creator_signature:any;
      creation_date:Date;
      deliver_date:Date;
      creator_id:string;
      constructor(creator_name:string,
        creator_signature:any,
        creation_date:Date,
        deliver_date:Date){
this.creator_name=creator_name;
this.creator_signature=creator_signature;
this.creation_date=creation_date;
this.deliver_date=deliver_date
      }
    }
    export class  CheckedByInfo{
      auditor_name:string;
      auditor_signature:any;
      audit_date:Date;
      deliver_date:Date;
      auditor_id:string
      constructor(auditor_name:string,
        auditor_signature:any,
        audit_date:Date,
        deliver_date:Date){
this.auditor_name=auditor_name;
this.auditor_signature=auditor_signature;
this.audit_date=audit_date;
this.deliver_date=deliver_date
      }
    }
    export class  ApprovedByInfo{
      approved_name:string;
      approved_signature:any;
      approved_date:Date;
      approved_id:string;
      constructor(approved_name:string,
        approved_signature:any,
        approved_date:Date){
        this.approved_name=approved_name;
        this.approved_signature=approved_signature;
        this.approved_date=approved_date;
      }
    }

    export class PCAData{
      area:string;
      professor:Array<string>;
      grade:string;
      subject:string;
      educational_level:string;
      constructor(area:string,professor:Array<string>,grade:string,subject:string,level:string){
this.area=area;
this.professor=professor;
this.grade=grade;
this.subject=subject;
this.educational_level=level;
      }
    }


    export class PCATime{
      weekly_charge:string;
      weeks_quantity:string;
      job_evaluation:string;
      total_class_weeks:string
      period_total:string;
      mcc_units:string;
      constructor(weekly_charge:string,weeks_quantity:string,job_evaluation:string,period_total:string,mcc_units:string,total_class_weeks:string){
this.weekly_charge=weekly_charge;
this.weeks_quantity=weeks_quantity;
this.job_evaluation=job_evaluation;
this.period_total=period_total;
this.mcc_units=mcc_units;      
}
    }


    export class PCAGoals{
      general_goals:Array<Goal>;
      sublevel_goals:Array <Goal>;
      comments:Array<PCAComment>=[];
      constructor(general_goals:Array<Goal>,sublevel_goals:Array<Goal>){
        this.general_goals=general_goals;
        this.sublevel_goals=sublevel_goals;
              }
              insertComment(comment:string,author:string,author_id:string ){
                let com1 =  new PCAComment("-1",comment)
          com1.comment_author=author;
          com1.author_id=author_id;
                this.comments.push(com1);


              }

    }

    export class Goal{
      goalID:string;
      goal:string;
      goal_code:string;
      goal_type=0;
      constructor(goalID:string, goal_code:string,goal:string){
this.goal=goal;
this.goalID=goalID;
this.goal_code=goal_code
      }
    }

    export class PCA_Axis{
      axis:Array<Axis>
      comments:Array<PCAComment>=[];
      constructor(axis:Array<Axis>){
this.axis=axis;
      }
      insertComment(comment:string,author:string,author_id:string ){
        let com1 =  new PCAComment("-1",comment)
  com1.comment_author=author;
  com1.author_id=author_id;
        this.comments.push(com1);


      }
    }
    export class Axis{
      axis_name:string;
      axis_id:string;
     
      constructor(id:string,name:string){
this.axis_name=name;
this.axis_id=id;
      }
    }

    export class PCAMcUnit{
unit_id:string;
perfomance_skills:Array<Skill>;
name="Seres Vivos";
duration:string="1 mes"

constructor(unit_id:string,perfomance_skills:Array<Skill>, evaluation_criterion:Array<Skill>){
this.unit_id=unit_id;
this.perfomance_skills=perfomance_skills;

}


}

export class Skill{
  skill_id:string;
  skill_code:string;
  skill_description:string;
  methodological_strategies:Array<Strategy>=[];
  evaluation_criterion:Skill;
  constructor(id:string,code:string,description:string){
    this.skill_id=id;
    this.skill_code=code;
    this.skill_description=description;
  }
}
 
export class Strategy{
  strategy_id:string;
  strategy:string;
  constructor (strategy_id:string,strategy:string){
this.strategy_id=strategy_id;
this.strategy=strategy;
  }
}

export class Biblio{
  biblio_id:string;
  biblio:string;
  constructor(biblio_id:string,biblio:string){

    this.biblio_id=biblio_id;
    this.biblio=biblio;
  }
  
}

export class PCARemark{
  remark_id:string;
  remark:string;
  constructor(remark_id:string,remark:string){

    this.remark_id=remark_id;
    this.remark=remark;
  }
}

export class PCAComment{
comment_id:string;
comment:string;
comment_author:string;
editable=false;
editing=false;
author_id=""
avatar="https://cdn-icons-png.flaticon.com/512/147/147144.png";
constructor(id:string,comment:string){
this.comment_id=id;
this.comment=comment
}
}



    //#endregion javi
  