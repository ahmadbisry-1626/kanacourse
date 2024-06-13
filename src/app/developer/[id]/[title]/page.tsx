import { TopCourseDev } from '@/constants';
import React from 'react'

type DevProps = {
    params: {
        id: string;
    }
}

const page = (props: DevProps) => {
    const { id } = props.params

    const DevCourse = TopCourseDev.find((dev) => dev.id === id)

    if (!DevCourse) {
        return <div>Course not found</div>
    }

    return (
        <div>{DevCourse.title}</div>
    )
}

export default page