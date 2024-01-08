<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('username', 255)->unique()->nullable();
            $table->boolean('gender')->nullable();
            $table->string('email');
            $table->string('password');
            $table->string('avatar')->nullable();
            $table->string('phone')->nullable();

            $table->unsignedBigInteger('role_id')->default(2);
            $table->foreign('role_id')->references('id')->on('roles')->cascadeOnDelete();

            $table->unsignedBigInteger('address_id')->nullable();
            $table->foreign('address_id')->references('id')->on('addresses')->cascadeOnDelete();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
