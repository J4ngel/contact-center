import clsx from 'clsx'


export interface TableProps<T> {
  headers: String[]
  data: T[]
  renderRow: (item: T, odd: boolean) => React.ReactNode
}

export function Table<T> ({headers, data, renderRow}:TableProps<T>){
  return(
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-600 text-white capitalize">
          {headers.map((header, index)=>(
            <th className={clsx(
              'p-1 border-r',
              {
                'rounded-tl-lg':index===0,
                'border-none rounded-tr-lg':index+1===headers.length
              }
            )} key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className='border-b'>
        {data.map((item, index)=>(
          <tr className={clsx(
            'text-center',
            {'bg-gray-200':index % 2 !== 0}
          )} key={index}>
            {renderRow(item, index % 2 !== 0)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}