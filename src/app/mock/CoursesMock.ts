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
      firstname: 'Waldemar',
      lastname: 'Tokarz'
    },
    {
      firstname: 'Jan',
      lastname: 'Woźniak'
    },
    {
      firstname: 'Aleksander',
      lastname: 'Smywiński-Pohl'
    },
    {
      firstname: 'Zbigniew',
      lastname: 'Kaleta'
    },
    {
      firstname: 'Stanisław',
      lastname: 'Polak'
    },
    {
      firstname: 'Anna',
      lastname: 'Zygmunt'
    },
    {
      firstname: 'Robert',
      lastname: 'Marcjan'
    },
    {
      firstname: 'Leszek',
      lastname: 'Siwik'
    },
    {
      firstname: 'Roman',
      lastname: 'Dębski'
    },
    {
      firstname: 'Marcin',
      lastname: 'Loś'
    },
    {
      firstname: 'Robert',
      lastname: 'Schaefer'
    },
    {
      firstname: 'Krzysztof',
      lastname: 'Podsiadło'
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
      firstname: 'Tadeusz',
      lastname: 'Dyduch'
    },
    {
      firstname: 'Grzegorz',
      lastname: 'Rogus'
    },
    {
      firstname: 'Jacek',
      lastname: 'Dajda'
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
      academicTeachers: [CoursesMock.Teachers[0], CoursesMock.Teachers[1], CoursesMock.Teachers[2]],
      summary: 'Słuchacz jest zorientowany w zagadnieniach dotyczących fizyki współczesnej,' +
        ' na poziomie ogólnym. Rozumie znaczenie mechaniki kwantowej dla współczesnych rozwiązań technologicznych.'
    },
    {
      academicTeachers: [CoursesMock.Teachers[3], CoursesMock.Teachers[4], CoursesMock.Teachers[5]],
      summary: 'Celem zajęć jest zaznajomienie studentów z paradygmatem programowania obiektowym.' +
        ' Studenci poznają techniki takie jak: dziedziczenie, delegowanie, ukrywanie implementacji.'
    },
    {
      academicTeachers: [CoursesMock.Teachers[6], CoursesMock.Teachers[7], CoursesMock.Teachers[8]],
      summary: 'Zaprezentowanie podstaw teorii baz danych ze szczególnym uwzględnieniem modelu relacyjnego.' +
        ' Przedstawienie całego procesu projektowania i implementacji struktury baz danych.'
    },
    {
      academicTeachers: [CoursesMock.Teachers[9], CoursesMock.Teachers[10]],
      summary: 'Kurs kładzie nacisk na zasady, techniki i wzorce programowania funkcyjnego, które są uniwersalne ' +
        'i przydatne w większości używanych obecnie języków programowania.'
    },
    {
      academicTeachers: [CoursesMock.Teachers[11], CoursesMock.Teachers[12], CoursesMock.Teachers[10]],
      summary: 'Równania różniczkowe zwyczajne I rzędu, problem Cauchyego,' +
      'rozwiązanie ogólne i osobliwe. Równanie różniczkowe liniowe n-tego rzędu,' +
      'metody rozwiązywania. Przekształcenie całkowe Laplace i jego zastosowanie do rozwiązywania ' +
        'równań różniczkowych. Układy równań różniczkowych zwyczajnych I rzędu. Równania różniczkowe' +
        ' o pochodnych cząstkowych I i II rzędu. ' +
        'Zastosowanie równań różniczkowych w fizyce.'
    },
    {
      academicTeachers: [CoursesMock.Teachers[13], CoursesMock.Teachers[11], CoursesMock.Teachers[9]],
      summary: 'Moduł zapoznaje się z podstawami teorii prawdopodobieństwa i najważniejszych metod statystyki matematycznej, koncentrując' +
        ' się na elementach stosowanych w nowoczesnych technologiach informatycznych.'
    },
    {
      academicTeachers: [CoursesMock.Teachers[14], CoursesMock.Teachers[15]],
      summary: 'Moduł ma dostarczyć studentom podstawowej wiedzy z zakresu inżynierii oprogramowania w ujęciu praktycznym, ' +
        'ze szczególnym naciskiem na proces pozyskiwania i dokumentowania wymagań.'
    },
    {
      academicTeachers: [CoursesMock.Teachers[16], CoursesMock.Teachers[17]],
      summary: 'Chyba nic'
    },
    {
      academicTeachers: [CoursesMock.Teachers[18]],
      summary: 'Chyba nic'
    },
    {
      academicTeachers: [CoursesMock.Teachers[19], CoursesMock.Teachers[10]],
      summary: 'Chyba nic'
    },
  ];

  public static Courses: Course[] = [
{
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


