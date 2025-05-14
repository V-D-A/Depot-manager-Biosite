"use client"

import React, { useState } from 'react'
import { DualRangeSelector } from '../dualrangeselector/dualrangeselector'

const DualRange = () => {
    const [range, setRange] = useState([25, 75])
    return (
        <div className="w-full max-w-sm space-y-4">
            <div className="flex justify-between text-sm text-muted-foreground">
                <span className='px-3 py-1 border rounded-md'>Min: {range[0]}</span>
                <span className='px-3 py-1 border rounded-md'>Max: {range[1]}</span>
            </div>
            <DualRangeSelector defaultValue={[25, 75]} max={100} step={1} onValueChange={setRange} className="w-full" />
        </div>
    )
}

export default DualRange;