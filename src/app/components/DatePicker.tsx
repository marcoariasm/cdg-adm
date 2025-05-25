// `https://webexapis.com/v1/meetings?meetingType=scheduledMeeting&from=${from}&to=${to}`,

export default function DatePicker() {
  return (
    <div className="w-full max-w-[330px] px-6 py-7 border border-gray-300 rounded-2xl">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="flex items-center gap-8 border border-gray-300 w-full justify-between rounded-xl py-0.5 px-0.5 text-sm font-medium text-gray-900 ">
          <button
            className="text-gray-900 p-2 rounded-lg transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
              fill="none">
              <path d="M10.0002 11.9999L6 7.99978L10.0025 3.99725" stroke="currentcolor"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          January
          <button
            className="text-gray-900 p-2 rounded-lg transition-all duration-500 hover:bg-indigo-100 hover:text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
              fill="none">
              <path d="M6.00236 3.99707L10.0025 7.99723L6 11.9998" stroke="currentcolor"
                strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
      <table className="pb-3 ">
        <thead className="mb-2">
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                Mo</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                Tu</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                We</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                Th</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                Fr</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                Sa</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                Su</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                26</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                27</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                28</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                29</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                30</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                31</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                1</p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                2</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                3</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                4</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                5</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                6</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                7</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                8</p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                9</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                10</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                11</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                12</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10  rounded-l-full">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                13</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10 ">
              <p
                className="text-sm font-medium text-white bg-indigo-600 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                14</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10  rounded-r-full">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                15</p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10 rounded-l-full">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                16</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                17</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10 rounded-r-full">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                18</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                19</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                20</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                21</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                22</p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                23</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                24</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                25</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                26</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                27</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                28</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                29</p>
            </td>
          </tr>
          <tr className="flex">
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                30</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-900 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                31</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                1</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                2</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                3</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                4</p>
            </td>
            <td className="flex items-center justify-center w-10 h-10">
              <p
                className="text-sm font-medium text-gray-300 rounded-full flex items-center justify-center w-full h-full transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-600">
                5</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}
