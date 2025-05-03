"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";

// List of common country codes
const countryCodes = [
  { value: "+1", label: "US", flag: "🇺🇸" },
  { value: "+44", label: "UK", flag: "🇬🇧" },
  { value: "+91", label: "IN", flag: "🇮🇳" },
  { value: "+61", label: "AU", flag: "🇦🇺" },
  { value: "+86", label: "CN", flag: "🇨🇳" },
  { value: "+49", label: "DE", flag: "🇩🇪" },
  { value: "+33", label: "FR", flag: "🇫🇷" },
  { value: "+81", label: "JP", flag: "🇯🇵" },
  { value: "+7", label: "RU", flag: "🇷🇺" },
  { value: "+55", label: "BR", flag: "🇧🇷" },
  { value: "+52", label: "MX", flag: "🇲🇽" },
  { value: "+27", label: "ZA", flag: "🇿🇦" },
  { value: "+82", label: "KR", flag: "🇰🇷" },
  { value: "+39", label: "IT", flag: "🇮🇹" },
  { value: "+34", label: "ES", flag: "🇪🇸" },
  { value: "+1", label: "CA", flag: "🇨🇦" },
  { value: "+31", label: "NL", flag: "🇳🇱" },
  { value: "+46", label: "SE", flag: "🇸🇪" },
  { value: "+41", label: "CH", flag: "🇨🇭" },
  { value: "+65", label: "SG", flag: "🇸🇬" },
];

interface CountryCodeSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function CountryCodeSelect({
  value,
  onValueChange,
}: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Find the selected country based on the value
  const selectedCountry =
    countryCodes.find((code) => code.value === value) || countryCodes[0];

  // Filter countries based on search query
  const filteredCountries = countryCodes.filter((country) => {
    const searchText =
      `${country.value} ${country.label} ${country.flag}`.toLowerCase();
    return searchText.includes(searchQuery.toLowerCase());
  });

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Select a country
  const handleSelect = (countryValue: string) => {
    onValueChange(countryValue);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        type="button"
        variant="outline"
        className="w-[110px] justify-between"
        onClick={handleToggle}
      >
        <span className="flex items-center">
          <span className="mr-1">{selectedCountry.flag}</span>
          {selectedCountry.value}
        </span>
        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-[200px] rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="p-2">
            <Input
              placeholder="Search country code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              className="h-8 text-sm"
            />
          </div>

          <div className="max-h-[300px] overflow-y-auto py-1">
            {filteredCountries.length === 0 ? (
              <div className="px-2 py-1 text-sm text-gray-500">
                No country code found.
              </div>
            ) : (
              filteredCountries.map((country) => (
                <button
                  key={`${country.value}-${country.label}`}
                  type="button"
                  className={cn(
                    "flex w-full items-center px-2 py-1.5 text-sm hover:bg-gray-100",
                    value === country.value && "bg-gray-50"
                  )}
                  onClick={() => handleSelect(country.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="mr-2">{country.flag}</span>
                  <span>{country.label}</span>
                  <span className="ml-auto text-gray-500">{country.value}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
