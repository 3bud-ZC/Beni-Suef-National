export interface CourseResult {
  id: number;
  course: string;
  gradeString: string;
  rating: 'جيد جداً' | 'جيد' | 'مقبول' | 'ناجح';
  points: number;
}

export interface StudentData {
  studentName: string;
  seatNumber: string;
  nationalId: string;
  status: string;
  coursesCount: number;
  courses: CourseResult[];
}
