"use client";

import React, { useState } from 'react';

import Search from '@/components/Search';
import SearchMenu from '@/components/SearchMenu';
import TokenInputs from '@/components/TokenInput';
import { TokenProvider } from '@/context/TokenContext';

export default function Home() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <TokenProvider>
      <div className="p-5">
        <TokenInputs />
        <SearchMenu setSearch={handleSearch} />
        {search && <Search search={search} />}
      </div>
    </TokenProvider>
  );
}
