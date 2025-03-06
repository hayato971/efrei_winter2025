<template>
    <div class="flex flex-col items-center w-[800px] h-[300px] border border-gray-500 bg-gray-500 rounded-lg relative -top-32">
        <!-- Header avec image et infos -->
        <div class="flex items-center w-full h-[100px] border-b border-white px-4">
            <img src="@/assets/icons8-circle-50.png" alt="Photo de profil" class="w-[85px] h-[85px]">
            <span class="text-[48px] ml-4">Username</span>
            <span class="text-[40px] ml-auto">Rank SS</span>
            <span class="text-[40px] ml-12">Lvl 99</span>
        </div>

        <!-- Informations sur les tâches -->
        <div class="w-full p-4 flex flex-col gap-2 mt-6">
            <p class="text-[16px]">📌 Nombre de tâches en cours : <b>10</b></p>
            <p class="text-[16px]">📝 Nombre de tâches créées : <b>35</b></p>
            <p class="text-[16px]">✅ Nombre de tâches complétées : <b>20</b></p>
            <p class="text-[16px]">⏳ Nombre de tâches en retard : <b>5</b></p>
        </div>
    </div>
</template>
