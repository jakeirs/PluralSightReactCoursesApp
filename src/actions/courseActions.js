/* We can omit right-hand side matches in ES6 and write just {, course}*/

export function createCourse(course) {
  return { type: 'CREATE_COURSE', course: course }
}