import {Course} from '../models/Course';
import {Teacher} from '../models/Teacher';
import {CourseDescription} from '../models/Course-Description';
import {Semester} from '../enums/Semester';
import {FormOfCourse} from '../enums/FormOfCourse';
import { Rating } from '../models/Rating';

export class CoursesMock {

  private static Rating: Rating[] = [
    {currentRating: 0,
    numberOfRates: 0,
    sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
    {currentRating: 0,
      numberOfRates: 0,
      sumOfRates: 0},
  ];

  private static Teachers: Teacher[] = [
    {
      firstname: 'Zbigniew',
      lastname: 'Kąkol'
    },
    {
      firstname: 'Aleksander',
      lastname: 'Smywiński-Pohl'
    },
    {
      firstname: 'Anna',
      lastname: 'Zygmunt'
    },
    {
      firstname: 'Roman',
      lastname: 'Dębski'
    },
    {
      firstname: 'Robert',
      lastname: 'Schaefer'
    },
    {
      firstname: 'Maciej',
      lastname: 'Smołka'
    },
    {
      firstname: 'Małgorzata',
      lastname: 'Żabińska-Rakoczy'
    },
    {
      firstname: 'Grzegorz',
      lastname: 'Rogus'
    },
    {
      firstname: 'Barbara',
      lastname: 'Głut'
    },
    {
      firstname: 'Mariusz',
      lastname: 'Meszka'
    },
  ];

  private static CourseDescriptions: CourseDescription[] = [
    {
      academicTeachers: CoursesMock.Teachers[0],
      summary: 'Słuchacz jest zorientowany w zagadnieniach dotyczących fizyki współczesnej,' +
        ' na poziomie ogólnym. Rozumie znaczenie mechaniki kwantowej dla współczesnych rozwiązań technologicznych.'
    },
    {
      academicTeachers: CoursesMock.Teachers[1],
      summary: 'Celem zajęć jest zaznajomienie studentów z paradygmatem programowania obiektowym.' +
        ' Studenci poznają techniki takie jak: dziedziczenie, delegowanie, ukrywanie implementacji.'
    },
    {
      academicTeachers: CoursesMock.Teachers[2],
      summary: 'Zaprezentowanie podstaw teorii baz danych ze szczególnym uwzględnieniem modelu relacyjnego.' +
        ' Przedstawienie całego procesu projektowania i implementacji struktury baz danych.'
    },
    {
      academicTeachers: CoursesMock.Teachers[3],
      summary: 'Kurs kładzie nacisk na zasady, techniki i wzorce programowania funkcyjnego, które są uniwersalne ' +
        'i przydatne w większości używanych obecnie języków programowania.'
    },
    {
      academicTeachers: CoursesMock.Teachers[4],
      summary: 'Równania różniczkowe zwyczajne I rzędu, problem Cauchyego,' +
      'rozwiązanie ogólne i osobliwe. Równanie różniczkowe liniowe n-tego rzędu,' +
      'metody rozwiązywania. Przekształcenie całkowe Laplace i jego zastosowanie do rozwiązywania ' +
        'równań różniczkowych. Układy równań różniczkowych zwyczajnych I rzędu. Równania różniczkowe' +
        ' o pochodnych cząstkowych I i II rzędu. ' +
        'Zastosowanie równań różniczkowych w fizyce.'
    },
    {
      academicTeachers: CoursesMock.Teachers[5],
      summary: 'Moduł zapoznaje się z podstawami teorii prawdopodobieństwa i najważniejszych metod statystyki matematycznej, koncentrując' +
        ' się na elementach stosowanych w nowoczesnych technologiach informatycznych.'
    },
    {
      academicTeachers: CoursesMock.Teachers[6],
      summary: 'Moduł ma dostarczyć studentom podstawowej wiedzy z zakresu inżynierii oprogramowania w ujęciu praktycznym, ' +
        'ze szczególnym naciskiem na proces pozyskiwania i dokumentowania wymagań.'
    },
    {
      academicTeachers: CoursesMock.Teachers[7],
      summary: 'Chyba nic'
    },
    {
      academicTeachers: CoursesMock.Teachers[8],
      summary: 'Chyba nic'
    },
    {
      academicTeachers: CoursesMock.Teachers[9],
      summary: 'Chyba nic'
    },
  ];

  public static Courses: Course[] = [
{
  id: 1,
  name: 'Fizyka',
  ECTS: 6,
  semester: Semester.Third,
  form: [FormOfCourse.Lecture , FormOfCourse.Exercises , FormOfCourse.Laboratory],
  maxParticipants: 160,
  rating: CoursesMock.Rating[0],
  description: CoursesMock.CourseDescriptions[0],
  image: 'assets/img/physics.png'
},
    {
      id: 2,
      name: 'Programowanie obiektowe',
      ECTS: 4,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture, FormOfCourse.Project],
      maxParticipants: 160,
      rating: CoursesMock.Rating[1],
      description: CoursesMock.CourseDescriptions[1],
      image: 'assets/img/po.png'
    },
    {
      id: 3,
      name: 'Podstawy baz danych',
      ECTS: 4,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture, FormOfCourse.Project],
      maxParticipants: 160,
      rating: CoursesMock.Rating[2],
      description: CoursesMock.CourseDescriptions[2],
      image: 'assets/img/database.png'
    },
    {
      id: 4,
      name: 'Programowanie funkcyjne',
      ECTS: 3,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture],
      maxParticipants: 160,
      rating: CoursesMock.Rating[3],
      description: CoursesMock.CourseDescriptions[3],
      image: 'assets/img/fp.png'
    },
    {
      id: 5,
      name: 'Równania różniczkowe i różnicowe',
      ECTS: 4,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture, FormOfCourse.Project],
      maxParticipants: 160,
      rating: CoursesMock.Rating[4],
      description: CoursesMock.CourseDescriptions[4],
      image: 'assets/img/rurki.png'
    },
    {
      id: 6,
      name: 'Rachunek prawdopodobieństwa i statystyka',
      ECTS: 6,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture, FormOfCourse.Project],
      maxParticipants: 160,
      rating: CoursesMock.Rating[5],
      description: CoursesMock.CourseDescriptions[5],
      image: 'assets/img/statistic.png'
    },
    {
      id: 7,
      name: 'Inżynieria wymagań i jakości',
      ECTS: 2,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture, FormOfCourse.Project],
      maxParticipants: 100,
      rating: CoursesMock.Rating[6],
      description: CoursesMock.CourseDescriptions[6],
      image: 'assets/img/iwij.png'
    },
    {
      id: 8,
      name: 'Wprowadzenie do aplikacji internetowych',
      ECTS: 2,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture, FormOfCourse.Project],
      maxParticipants: 100,
      rating: CoursesMock.Rating[7],
      description: CoursesMock.CourseDescriptions[7],
      image: 'assets/img/wdai.png'
    },
    {
      id: 9,
      name: 'Algorytmy geometryczne',
      ECTS: 2,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture, FormOfCourse.Project],
      maxParticipants: 70,
      rating: CoursesMock.Rating[8],
      description: CoursesMock.CourseDescriptions[8],
      image: 'assets/img/geometric.png'
    },
    {
      id: 10,
      name: 'Algorytmy grafowe',
      ECTS: 2,
      semester: Semester.Third,
      form: [FormOfCourse.Laboratory, FormOfCourse.Lecture],
      maxParticipants: 70,
      rating: CoursesMock.Rating[9],
      description: CoursesMock.CourseDescriptions[9],
      image: 'assets/img/graph.png'
    }
  ];
}


