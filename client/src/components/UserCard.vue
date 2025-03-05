<template>
    <div class="flex items-center flex-col w-screen border-b border-dashed border-gray-500 pb-4">
        <div>
            <img src="@/assets/icons8-circle-50.png" alt="user logo" class="rounded-full h-20 w-20 border border-white">
            <span class="hover:underline text-[14px] ml-[8px]">Username</span>
        </div>

        <div class="flex inline-flex gap-6 mt-4">
            <div class="flex items-center justify-center flex-col text-center border border-white w-14 h-14 mt-4 rounded-lg bg-cyan-300 text-black">
                <p>Exp</p>
                <p>0</p>
            </div>

            <div class="flex items-center justify-center flex-col text-center border border-green-300 w-20 h-20 rounded-lg bg-green-300 text-black">
                <p class="text-[24px] relative -top-1">Level</p>
                <p class="text-[20px] relative -top-1">0</p>
            </div>

            <div class="flex items-center justify-center flex-col text-center border border-white w-14 h-14 mt-4 rounded-lg bg-cyan-300 text-black">
                <p>Done</p>
                <p>0</p>
            </div>
        </div>
    </div>
</template>
