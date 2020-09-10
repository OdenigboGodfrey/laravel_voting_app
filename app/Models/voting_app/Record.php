<?php

namespace App\Models\voting_app;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Record extends Model
{
    use HasFactory, SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $guarded = [];

     /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function option() {
        return $this->hasMany(Option::class);
    }
}
