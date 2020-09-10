<?php

namespace App\Models\voting_app;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Option extends Model
{
    use HasFactory, SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
     protected $guarded = [];

     /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function record() {
        return $this->belongsTo(Record::class);
    }
}
