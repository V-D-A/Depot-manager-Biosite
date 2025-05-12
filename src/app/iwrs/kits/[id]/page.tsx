"use client"
import EditKitPage from '@/modules/edc/warehouse/pages/EditKit.page';
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
    const { id } = useParams();
    const kitId = Array.isArray(id) ? id[0] : id;

    if (!kitId) return <h1>Oops! Something Went Wrong!</h1>

    return <EditKitPage kitId={kitId} />
}

export default Page;