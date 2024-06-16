--Students personal information
CREATE TABLE students (
    student_id VARCHAR(8) PRIMARY KEY,
    last_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    date_of_birth DATE NOT NULL

);

INSERT INTO students (student_id, last_name, first_name, email, date_of_birth)
VALUES
    ('11348310', 'Apetsi', 'Freda', 'a.freda@st.ug.edu.gh', '2007-03-15' ),
    ('11014727', 'Annan', 'Chioma', 'a.chioma@st.ug.edu.gh', '1999-04-22' ),
    ('11049523', 'Somuah', 'Peggy', 's.peggy@st.ug.edu.gh', '2004-08-10' );




-- Student Fees Payments Table
CREATE TABLE fees (
    fee_id SERIAL PRIMARY KEY,
    student_id VARCHAR(8) REFERENCES students(student_id),
    amount DECIMAL(10, 2) NOT NULL,
    date_paid DATE NOT NULL
);
--fees
INSERT INTO fees (student_id, amount, date_paid)
VALUES
    ('11348310', 1500.00, '2023-11-15'),
    ( '11014727', 2000.00, '2024-02-20'),
    ('11049523', 1750.00, '2024-03-25');

--Courses information
CREATE TABLE courses (
    course_code VARCHAR(10) PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_description TEXT
);
-- Insert sample data into the courses table
INSERT INTO courses (course_code, course_name, course_description)
VALUES
    ('CPEN206', 'Linear Circuits', 'This course provides an overview of computer science concepts.'),
    ('CPEN204', 'Data Structures and Algorithms', 'This course covers data structures and algorithms.'),
    ('CPEN208', 'Database Systems', 'This course introduces database concepts and SQL.');





--lecturers table
CREATE TABLE lecturers (
    lecturer_id SERIAL PRIMARY KEY,
    last_name VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
-- Insert sample data into the lecturers table
INSERT INTO lecturers ( last_name,first_name, email)
VALUES
    ('Mills', 'Godfrey', 'cpen.mills@gmail.com'),
    ('Richardson', 'Magarete', 'cpen.richardson@i@gmail.com'),
    ('Assiamah', 'John', 'cpen.assiamah@gamil.com');



--tas table
CREATE TABLE teaching_assistants (
    ta_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Insert sample data into the teaching_assistants table
INSERT INTO teaching_assistants (first_name, last_name, email)
VALUES
    ('David', 'Smith', 'david.smith@gamil.com'),
    ('Emily', 'Davis', 'emily.davis@gamil.com'),
    ('Daniel', 'Miller', 'daniel.miller@gamil.com');



-- Course Enrollment Table
CREATE TABLE course_enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id VARCHAR(10) REFERENCES students(student_id),
    course_code VARCHAR(10) REFERENCES courses(course_code),
    enrollment_date DATE NOT NULL
);

	-- Insert sample data into the course_enrollments table
INSERT INTO course_enrollments (student_id, course_code, enrollment_date)
VALUES
    ('11348310', 'CPEN204', '2024-03-20'),
    ('11014727', 'CPEN208', '2024-04-25'),
    ('11049523', 'CPEN206', '2024-03-15');

-- Lecturers to Course Assignment Table
CREATE TABLE lecturer_course_assignments (
    assignment_id SERIAL PRIMARY KEY,
    lecturer_id INT REFERENCES lecturers(lecturer_id),
    course_code VARCHAR(10) REFERENCES courses(course_code),
    assignment_date DATE NOT NULL
);
	INSERT INTO lecturer_course_assignments (lecturer_id, course_code, assignment_date)
VALUES
    (1, 'CPEN204', '2024-01-15'),
    (2, 'CPEN208', '2023-08-10'),
    (3, 'CPEN206', '2024-03-05');


-- Lecturers to TA Assignment Table
CREATE TABLE lecturer_ta_assignments (
    assignment_id SERIAL PRIMARY KEY,
    lecturer_id INT REFERENCES lecturers(lecturer_id),
    ta_id INT REFERENCES teaching_assistants(ta_id),
    assignment_date DATE NOT NULL
);

-- Insert sample data into the lecturer_ta_assignments table
INSERT INTO lecturer_ta_assignments (lecturer_id, ta_id, assignment_date)
VALUES
    (1, 1, '2023-10-20'),
    (2, 2, '2023-10-25'),
    (3, 3, '2023-10-15');







CREATE OR REPLACE FUNCTION calculate_outstanding_fees() RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    SELECT json_agg(row_to_json(t))
    INTO result
    FROM (
        SELECT s.student_id, s.first_name, s.last_name,
               (1000.00 - COALESCE(SUM(fp.amount_paid), 0)) AS outstanding_fees
        FROM student_management.students s
        LEFT JOIN student_management.fees_payments fp ON s.student_id = fp.student_id
        GROUP BY s.student_id
    ) t;
    RETURN result;
END;
$$ LANGUAGE plpgsql;


select * from students;
select * from course_enrollments;
select * from fees;
select * from courses;
select * from lecturer_course_assignments;
select * from lecturer_ta_assignments;
select * from lecturers;
select * from teaching_assistants;
