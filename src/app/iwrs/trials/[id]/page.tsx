"use client"
import TrialInfo from '@/modules/edc/trials/pages/trial-info/trial-info.page';
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
    const { id } = useParams();
    console.log("id ",id);
    const trialId = Array.isArray(id) ? id[0] : id;

    if (!trialId) return <h1>Oops! Something Went Wrong!</h1>

    return <TrialInfo trialId={trialId} />
}

export default Page;