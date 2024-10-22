export type CourseProps = {
    id: string;
    category?: string;
    name: string;
    imgUrl: string;
    thumbUrl: string
    thumbUrlMobile: string;
    title: string;
    tags: string[];
    description: string;
    fullDesc: string[];
    price: number;
    discount: number;
    discPercent: string
    rating: number;
    totalRating: number
    webinar: string;
    section: string
    lecture: string
    duration: string
    language: string
    access: string
    certificate: string
}

export type ThumbCourseProps = {
    id: string
    firstName: string
    lastName: string
    fullName: string
    title: string
    imgUrl: string
    thumbUrl: string
    thumbUrlMobile: string
    tags: string[]
    desc: string[]
    price: number
    discount: number
    discPercent: string
    rating: number
    totalRating: number
    section: string
    lecture: string
    duration: string
    language: string
    access: string
    certificate: string
    webinar: string
}
