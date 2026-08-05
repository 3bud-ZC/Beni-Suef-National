export interface CourseResult {
  id: number;
  course: string;
  gradeString: string;
  rating: 'امتياز' | 'ممتاز' | 'جيد جداً' | 'جيد' | 'مقبول' | 'ناجح' | 'راسب لائحة' | 'راسب لايح' | 'راسب' | string;
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
